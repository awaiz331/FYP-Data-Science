# COVID-19 Severity Predictor - Setup Guide

## Quick Start

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Open Browser**: Navigate to http://localhost:3000

## Features Overview

### 🏥 **Doctor Interface**
- Review chest X-ray images
- Predict severity scores using interactive sliders
- Submit predictions for comparison

### 🤖 **AI Comparison**
- View AI model predictions alongside doctor assessments
- Compare severity levels and scores
- Analyze agreement rates

### 📊 **Results Analysis**
- Detailed comparison table
- Agreement rate statistics
- Average difference calculations
- Visual progress tracking

## Customization Options

### Adding Real X-ray Images
1. Place your X-ray images in `public/images/`
2. Update `src/data/sampleData.ts` with actual image paths
3. Replace placeholder URLs with local image references

### Modifying AI Predictions
1. Edit `aiPrediction` values in `src/data/sampleData.ts`
2. Adjust severity thresholds in component logic
3. Update agreement criteria as needed

### Styling Changes
- Colors: Modify `tailwind.config.js`
- Layout: Edit component files
- Animations: Update CSS classes

## Technical Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Modern UI/UX** with responsive design

## File Structure
```
covid-severity-predictor/
├── public/
│   └── images/          # Add your X-ray images here
├── src/
│   ├── components/      # React components
│   ├── data/           # Sample data and configurations
│   ├── types.ts        # TypeScript definitions
│   └── App.tsx         # Main application
└── package.json        # Dependencies and scripts
```

## Usage Instructions

1. **Review Instructions**: Read the severity guidelines
2. **Examine Images**: Look at each chest X-ray carefully
3. **Make Predictions**: Use sliders to predict severity (0-100%)
4. **Submit Assessments**: Click "Submit Prediction" for each image
5. **View Results**: Click "View Results" to see comparisons
6. **Analyze Performance**: Review agreement rates and differences

## Severity Guidelines
- **Low (0-30%)**: Minimal abnormalities
- **Medium (30-60%)**: Mild ground-glass opacities
- **High (60-80%)**: Extensive opacities
- **Critical (80-100%)**: Severe bilateral involvement

## Troubleshooting

### Common Issues
1. **Port 3000 in use**: Try `npm start -- --port 3001`
2. **Dependencies missing**: Run `npm install`
3. **TypeScript errors**: Check import paths and types

### Development Tips
- Use browser dev tools for debugging
- Check console for error messages
- Verify image paths are correct
- Test on different screen sizes

## Next Steps
1. Add real chest X-ray images
2. Integrate with your AI model predictions
3. Customize severity thresholds
4. Add authentication for doctors
5. Implement data persistence
6. Add export functionality for results 