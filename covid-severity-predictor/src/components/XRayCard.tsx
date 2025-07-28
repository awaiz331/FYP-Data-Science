import React, { useState } from 'react';
import { XRayImage, SeverityLevel } from '../types';
import { Eye, Brain, User, CheckCircle } from 'lucide-react';

interface XRayCardProps {
  xray: XRayImage;
  onPredictionSubmit: (imageId: string, prediction: number) => void;
}

const XRayCard: React.FC<XRayCardProps> = ({ xray, onPredictionSubmit }) => {
  const [doctorPrediction, setDoctorPrediction] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getSeverityColor = (severity: string) => {
    const colors = {
      mild: 'bg-green-100 text-green-800',
      moderate: 'bg-yellow-100 text-yellow-800',
      severe: 'bg-red-100 text-red-800',
      critical: 'bg-red-900 text-white',
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSeverityLevel = (prediction: number): SeverityLevel['label'] => {
    if (prediction < 0.1) return 'mild';
    if (prediction < 0.25) return 'moderate';
    if (prediction < 0.5) return 'severe';
    return 'critical';
  };

  const handleSubmit = () => {
    onPredictionSubmit(xray.id, doctorPrediction);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        {/* Full X-ray image display */}
        <div className="w-full bg-gray-100 overflow-hidden">
          <img
            src={xray.imageUrl}
            alt={`Chest X-ray ${xray.id}`}
            className="w-full h-auto object-contain"
            style={{ minHeight: '300px', maxHeight: '400px' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
            <div className="text-center">
              <Eye className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Chest X-ray Image</p>
              <p className="text-xs text-gray-400">{xray.filename}</p>
            </div>
          </div>
        </div>

        {/* AI Prediction Badge - Only show after submission */}
        {isSubmitted && (
          <div className="absolute top-2 right-2">
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(xray.aiSeverity)}`}>
              <Brain className="h-3 w-3 inline mr-1" />
              AI: {xray.aiSeverity}
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* AI Prediction Section - Only show after submission */}
        {isSubmitted && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Brain className="h-4 w-4 mr-2 text-blue-600" />
              AI Model Prediction
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Severity Score:</span>
              <span className="font-mono text-lg font-bold text-blue-600">
                {(xray.aiPrediction * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${xray.aiPrediction * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className={`${isSubmitted ? 'border-t pt-4' : ''}`}>
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <User className="h-4 w-4 mr-2" />
            Doctor's Prediction
          </h3>

          {!isSubmitted ? (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Severity Score (0-100%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={doctorPrediction}
                  onChange={(e) => setDoctorPrediction(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span className="font-mono font-bold text-blue-600">{doctorPrediction}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Predicted Severity:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(getSeverityLevel(doctorPrediction / 100))}`}>
                  {getSeverityLevel(doctorPrediction / 100)}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Submit Prediction
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Doctor's submitted prediction */}
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-gray-900 mb-2">Your Prediction</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Severity Score:</span>
                  <span className="font-mono text-lg font-bold text-green-600">
                    {doctorPrediction}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${doctorPrediction}%` }}
                  ></div>
                </div>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(getSeverityLevel(doctorPrediction / 100))}`}>
                    {getSeverityLevel(doctorPrediction / 100)}
                  </span>
                </div>
              </div>

              {/* Comparison result */}
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Prediction submitted!</p>
                <p className="text-xs text-gray-500">
                  AI: {xray.aiSeverity} | Doctor: {getSeverityLevel(doctorPrediction / 100)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Difference: {Math.abs((xray.aiPrediction * 100) - doctorPrediction).toFixed(1)}%
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default XRayCard; 