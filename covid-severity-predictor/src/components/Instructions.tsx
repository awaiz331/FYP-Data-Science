import React from 'react';
import { Info, Lightbulb } from 'lucide-react';

const Instructions: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
      <div className="flex items-start space-x-3">
        <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How to Use This Tool
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xs font-bold">1</span>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Review each chest X-ray image</strong> carefully. Look for signs of COVID-19
                  such as ground-glass opacities, consolidation, or other pulmonary abnormalities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xs font-bold">2</span>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Use the slider</strong> to predict the severity score (0-100%) based on your
                  clinical assessment of the X-ray findings. <strong>AI predictions are hidden to ensure unbiased assessment.</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xs font-bold">3</span>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Submit your prediction</strong> to reveal the AI model's assessment and see
                  how your clinical judgment compares to the machine learning algorithm.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xs font-bold">4</span>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>View the comparison results</strong> to see agreement rates and differences
                  between human and AI predictions across all reviewed images.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-800 mb-1">Severity Guidelines:</p>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li><strong>Mild (0-10%):</strong> Minimal or no visible abnormalities</li>
                  <li><strong>Moderate (10-25%):</strong> Mild ground-glass opacities or small consolidations</li>
                  <li><strong>Severe (25-50%):</strong> Extensive ground-glass opacities or multiple consolidations</li>
                  <li><strong>Critical (50-100%):</strong> Severe bilateral involvement or "white lung" appearance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-800">
              <strong>Note:</strong> This tool is designed for unbiased comparison. AI predictions are hidden until you submit your assessment to prevent any influence on your clinical judgment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions; 