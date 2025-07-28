import React from 'react';
import { ComparisonResult } from '../types';
import { TrendingUp, TrendingDown, BarChart3, Target, User, Brain } from 'lucide-react';

interface ComparisonResultsProps {
  results: ComparisonResult[];
}

const ComparisonResults: React.FC<ComparisonResultsProps> = ({ results }) => {
  const totalImages = results.length;
  const agreements = results.filter(r => r.agreement).length;
  const disagreements = totalImages - agreements;
  const averageDifference = results.reduce((sum, r) => sum + r.difference, 0) / totalImages;

  const getAgreementIcon = (agreement: boolean) => {
    return agreement ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getDifferenceColor = (difference: number) => {
    if (difference < 0.1) return 'text-green-600';
    if (difference < 0.2) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BarChart3 className="h-6 w-6 mr-2" />
        Comparison Results
      </h2>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <div>
              <p className="text-sm text-blue-600 font-medium">Agreement Rate</p>
              <p className="text-2xl font-bold text-blue-900">
                {((agreements / totalImages) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            <div>
              <p className="text-sm text-green-600 font-medium">Agreements</p>
              <p className="text-2xl font-bold text-green-900">{agreements}</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center">
            <TrendingDown className="h-5 w-5 text-red-600 mr-2" />
            <div>
              <p className="text-sm text-red-600 font-medium">Disagreements</p>
              <p className="text-2xl font-bold text-red-900">{disagreements}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Results Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Image</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-900">
                <Brain className="h-4 w-4 inline mr-1" />
                AI Prediction
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-900">
                <User className="h-4 w-4 inline mr-1" />
                Doctor Prediction
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-900">Difference</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-900">Agreement</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={result.imageId} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <span className="font-medium text-gray-900">Image {index + 1}</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="font-mono text-blue-600 font-semibold">
                    {(result.aiPrediction * 100).toFixed(1)}%
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="font-mono text-green-600 font-semibold">
                    {(result.doctorPrediction * 100).toFixed(1)}%
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={`font-mono font-semibold ${getDifferenceColor(result.difference)}`}>
                    {(result.difference * 100).toFixed(1)}%
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  {getAgreementIcon(result.agreement)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Average Difference */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Average Difference:</span>
          <span className={`font-mono text-lg font-bold ${getDifferenceColor(averageDifference)}`}>
            {(averageDifference * 100).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonResults; 