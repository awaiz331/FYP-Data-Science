# COVID-19 Chest X-ray Severity Predictor

A React-based web application for comparing AI model predictions with doctor assessments for COVID-19 chest X-ray severity scoring.

## Features

- **Interactive X-ray Review**: Doctors can review chest X-ray images and predict severity scores
- **AI vs Human Comparison**: Compare AI model predictions with doctor assessments
- **Real-time Analysis**: View agreement rates and prediction differences
- **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS
- **Progress Tracking**: Monitor completion status of image reviews

## Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Modern UI/UX** with smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd covid-severity-predictor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use

1. **Review Instructions**: Read the guidelines for severity assessment
2. **Examine X-rays**: Review each chest X-ray image carefully
3. **Make Predictions**: Use the slider to predict severity scores (0-100%)
4. **Submit Assessments**: Click "Submit Prediction" for each image
5. **View Results**: Click "View Results" to see comparison statistics
6. **Analyze Performance**: Review agreement rates and prediction differences

## Severity Guidelines

- **Low (0-30%)**: Minimal or no visible abnormalities
- **Medium (30-60%)**: Mild ground-glass opacities or small consolidations
- **High (60-80%)**: Extensive ground-glass opacities or multiple consolidations
- **Critical (80-100%)**: Severe bilateral involvement or "white lung" appearance

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Application header
│   ├── Instructions.tsx # User instructions
│   ├── XRayCard.tsx    # Individual X-ray card
│   └── ComparisonResults.tsx # Results comparison
├── data/               # Sample data
│   └── sampleData.ts   # X-ray images and predictions
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles
```

## Customization

### Adding Real X-ray Images

1. Place your X-ray images in the `public/images/` directory
2. Update the `imageUrl` field in `src/data/sampleData.ts`
3. Replace placeholder image paths with actual image paths

### Modifying AI Predictions

1. Update the `aiPrediction` values in `src/data/sampleData.ts`
2. Adjust severity thresholds in the `getSeverityLevel` function
3. Modify agreement criteria in the comparison logic

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## Research Context

This application is designed to evaluate the performance of deep learning models in automating severity scoring of COVID-19 from chest X-rays. The tool facilitates comparison between AI model predictions and human expert assessments, providing valuable insights for model validation and clinical deployment. 