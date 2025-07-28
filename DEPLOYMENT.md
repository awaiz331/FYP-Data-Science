# Deploying COVID-19 Severity Predictor to Vercel

## 🚀 Quick Deployment Steps

### Method 1: Deploy from Main Directory (Recommended)

Since your React app is in the `covid-severity-predictor` subdirectory, deploy from the main directory:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the main directory**
   ```bash
   # Make sure you're in the main FYP-Data-Science directory
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `covid-severity-predictor` (or your preferred name)
   - Directory? → `./` (current directory)
   - Override settings? → `Y`
   - Build Command: → `npm run build`
   - Output Directory: → `covid-severity-predictor/build`
   - Install Command: → `npm install`

### Method 2: Deploy via GitHub (Recommended for updates)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/FYP-Data-Science.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework Preset: `Other`
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `covid-severity-predictor/build`
     - Install Command: `npm install`
   - Click "Deploy"

### Method 3: Deploy via Vercel Dashboard

1. **Prepare your project**
   ```bash
   cd covid-severity-predictor
   npm run build
   ```

2. **Upload to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Choose "Upload" option
   - Upload your `covid-severity-predictor/build` folder
   - Configure project settings
   - Deploy

## 📁 Project Structure

```
FYP-Data-Science/
├── covid-severity-predictor/     # Your React app
│   ├── public/
│   │   ├── images/              # X-ray images
│   │   └── index.html
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── data/               # Sample data
│   │   └── App.tsx             # Main app
│   ├── package.json
│   └── vercel.json
├── code.py                      # Your Python code
├── custom_model.py              # Your ML model
├── predictions.json             # AI predictions
├── package.json                 # Main package.json
└── vercel.json                  # Main vercel.json
```

## ⚙️ Configuration Files

### Main vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "covid-severity-predictor/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "covid-severity-predictor/build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/images/(.*)",
      "dest": "/images/$1"
    },
    {
      "src": "/favicon.ico",
      "dest": "/favicon.ico"
    },
    {
      "src": "/manifest.json",
      "dest": "/manifest.json"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🔧 Build Commands

Vercel will automatically run these commands:
- **Install**: `npm install`
- **Build**: `npm run build` (which runs `cd covid-severity-predictor && npm install && npm run build`)
- **Output**: `covid-severity-predictor/build/` directory

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails with "react-scripts: command not found"**
   - Ensure you're deploying from the main directory
   - Check that `covid-severity-predictor/package.json` exists
   - Verify the build command points to the correct directory

2. **Images not loading**
   - Ensure images are in `covid-severity-predictor/public/images/` directory
   - Check image paths in `src/data/sampleData.ts`
   - Verify image file names match exactly

3. **404 errors**
   - Check that `vercel.json` has proper routing
   - Ensure all routes point to `index.html`

## 📈 Monitoring

After deployment:
- Monitor performance in Vercel dashboard
- Check analytics and user behavior
- Set up alerts for errors

## 🔗 Your Deployed URL

Once deployed, you'll get a URL like:
`https://covid-severity-predictor.vercel.app`

## 🎯 Next Steps

1. **Test the deployment** - Ensure all features work
2. **Share with doctors** - Get feedback on usability
3. **Collect data** - Monitor comparison results
4. **Iterate** - Make improvements based on feedback

## 📞 Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- React Deployment: [create-react-app.dev/docs/deployment](https://create-react-app.dev/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support) 