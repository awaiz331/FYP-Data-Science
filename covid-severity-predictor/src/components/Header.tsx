import React from 'react';
import { Activity, Brain, Stethoscope } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">COVID-19 Severity Predictor</h1>
              <p className="text-blue-100 text-sm">AI vs. Doctor Comparison Tool</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span className="text-sm font-medium">Real-time Analysis</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 