import React, { useState } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import XRayCard from './components/XRayCard';
import ComparisonResults from './components/ComparisonResults';
import { XRayImage, ComparisonResult } from './types';
import { sampleXRayImages } from './data/sampleData';
import { BarChart3, RefreshCw, Eye } from 'lucide-react';

const App: React.FC = () => {
  const [xrayImages, setXrayImages] = useState<XRayImage[]>(sampleXRayImages);
  const [showResults, setShowResults] = useState(false);
  const [comparisonResults, setComparisonResults] = useState<ComparisonResult[]>([]);

  const handlePredictionSubmit = (imageId: string, prediction: number) => {
    setXrayImages(prev =>
      prev.map(img =>
        img.id === imageId
          ? {
            ...img,
            doctorPrediction: prediction / 100,
            doctorSeverity: getSeverityLevel(prediction / 100),
            isPredicted: true
          }
          : img
      )
    );
  };

  const getSeverityLevel = (prediction: number): 'mild' | 'moderate' | 'severe' | 'critical' => {
    if (prediction < 0.1) return 'mild';
    if (prediction < 0.25) return 'moderate';
    if (prediction < 0.5) return 'severe';
    return 'critical';
  };

  const generateComparisonResults = () => {
    const results: ComparisonResult[] = xrayImages
      .filter(img => img.isPredicted)
      .map(img => {
        const difference = Math.abs((img.aiPrediction || 0) - (img.doctorPrediction || 0));
        const agreement = difference < 0.2; // Consider agreement if difference is less than 20%

        return {
          imageId: img.id,
          aiPrediction: img.aiPrediction,
          doctorPrediction: img.doctorPrediction || 0,
          difference,
          agreement,
        };
      });

    setComparisonResults(results);
    setShowResults(true);
  };

  const resetPredictions = () => {
    setXrayImages(sampleXRayImages);
    setShowResults(false);
    setComparisonResults([]);
  };

  const predictedCount = xrayImages.filter(img => img.isPredicted).length;
  const totalCount = xrayImages.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <Instructions />

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              Progress: {predictedCount} of {totalCount} images reviewed
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={generateComparisonResults}
                disabled={predictedCount === 0}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                View Results
              </button>
              <button
                onClick={resetPredictions}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(predictedCount / totalCount) * 100}%` }}
            ></div>
          </div>
        </div>

        {showResults && comparisonResults.length > 0 && (
          <div className="mb-8">
            <ComparisonResults results={comparisonResults} />
          </div>
        )}

        {/* X-ray Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {xrayImages.map((xray) => (
            <XRayCard
              key={xray.id}
              xray={xray}
              onPredictionSubmit={handlePredictionSubmit}
            />
          ))}
        </div>

        {/* Empty State */}
        {predictedCount === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Start
              </h3>
              <p className="text-gray-600 mb-4">
                Begin reviewing the chest X-ray images above. Use the sliders to predict
                severity scores and compare your assessments with the AI model.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Review each image carefully</p>
                <p>• Use the severity guidelines provided</p>
                <p>• Submit predictions to see comparison results</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App; 