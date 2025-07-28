# Deploying COVID-19 Severity Predictor to Vercel

## 🚀 Quick Deployment Steps

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   cd covid-severity-predictor
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `covid-severity-predictor` (or your preferred name)
   - Directory? → `./` (current directory)
   - Override settings? → `N`

### Method 2: Deploy via GitHub (Recommended for updates)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/covid-severity-predictor.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework Preset: `Create React App`
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `build`
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
   - Upload your `build` folder
   - Configure project settings
   - Deploy

## 📁 Project Structure for Deployment

```
covid-severity-predictor/
├── public/
│   ├── images/          # Your X-ray images
│   └── index.html
├── src/
│   ├── components/      # React components
│   ├── data/           # Sample data
│   └── App.tsx         # Main app
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## ⚙️ Configuration Files

### vercel.json (Optional)
Create this file in your project root for custom configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
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

## 🔧 Environment Variables (if needed)

If you need environment variables, add them in Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add any required variables

## 📦 Build Commands

Vercel will automatically run these commands:
- **Install**: `npm install`
- **Build**: `npm run build`
- **Output**: `build/` directory

## 🌐 Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Easy rollback to previous versions

## 📊 Performance Optimization

Your app is already optimized with:
- ✅ React 18 with concurrent features
- ✅ Tailwind CSS for minimal bundle size
- ✅ TypeScript for type safety
- ✅ Optimized images and assets

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails**
   - Check `package.json` has correct scripts
   - Ensure all dependencies are in `dependencies` (not `devDependencies`)
   - Verify TypeScript configuration

2. **Images not loading**
   - Ensure images are in `public/images/` directory
   - Check image paths in `src/data/sampleData.ts`
   - Verify image file names match exactly

3. **Styling issues**
   - Ensure Tailwind CSS is properly configured
   - Check `tailwind.config.js` and `postcss.config.js`

4. **404 errors**
   - Add `vercel.json` with proper routing
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