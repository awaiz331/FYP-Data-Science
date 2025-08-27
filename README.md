# COVID-19 Chest X-ray Severity Predictor - Final Year Project

A comprehensive research project combining **machine learning models** and **web-based evaluation tools** for COVID-19 severity assessment from chest X-ray images. This project addresses the critical need for reliable COVID-19 severity assessment by developing AI models that can automatically predict severity scores and creating a platform for medical professionals to validate these predictions.

## 🎯 Research Question

**Can deep learning models be used to automate severity scoring of COVID-19 from chest X-rays?**

While most studies focus on binary classification (COVID vs. normal), this project explores **severity scoring** which provides more clinically actionable insights for triage and treatment planning. The primary goal is to **obtain feedback from trained COVID doctors and compare their clinical assessments with AI model predictions**, enabling evidence-based evaluation of AI performance in medical imaging applications.

## 🔗 Important Links

### **Development Resources**
- **Google Colab Notebook**: [https://colab.research.google.com/drive/1VfDiy26aAPqEKoYBNBrslBhz57lK_0Uj?usp=sharing](https://colab.research.google.com/drive/1VfDiy26aAPqEKoYBNBrslBhz57lK_0Uj?usp=sharing)

### **Dataset**
- **COVIDQU Dataset**: [https://www.kaggle.com/datasets/anasmohammedtahir/covidqu/data](https://www.kaggle.com/datasets/anasmohammedtahir/covidqu/data)

### **Live Application**
- **Web Application**: [https://fyp-data-science-mhrfh5ntm-awaiz-hussains-projects-c757636b.vercel.app/](https://fyp-data-science-mhrfh5ntm-awaiz-hussains-projects-c757636b.vercel.app/)

## 🏗️ Project Components

### 1. **Machine Learning Pipeline (Python)**
Advanced deep learning models for COVID-19 severity prediction:

- **Binary Classification**: COVID vs Non-COVID detection using DenseNet121
- **Severity Regression**: Continuous severity prediction (0-100%) using custom CNN architectures
- **Multi-class Classification**: Categorization into clinical severity levels (Mild, Moderate, Severe, Critical)
- **Dual-Input Models**: Advanced models using both X-ray images and infection segmentation masks

### 2. **Web Application (React)**
Research tool for expert validation and comparison:

- **Expert Assessment Interface**: Doctors review chest X-ray images and predict severity scores
- **Blind Evaluation**: AI predictions are hidden during assessment to prevent bias
- **Comparison Analysis**: Side-by-side comparison of human vs AI predictions
- **Statistical Reporting**: Agreement rates, prediction differences, and performance metrics

## 🔬 Research Methodology

### **Data-Driven Severity Assessment**
- **Dataset**: COVIDQU dataset with lung segmentation and infection segmentation masks
- **Severity Calculation**: Automated computation of infection percentage relative to lung area
- **Clinical Validation**: Expert radiologists validate AI predictions through the web platform
- **Performance Benchmarking**: Systematic comparison between human expertise and machine learning algorithms

### **Model Development Strategy**
- **Progressive Complexity**: From simple binary classification to sophisticated dual-input models
- **Transfer Learning**: Leveraging pre-trained models (EfficientNetB0, DenseNet121) for medical image analysis
- **Advanced Training**: Learning rate scheduling, early stopping, class balancing, and regularization techniques
- **Comprehensive Evaluation**: MAE, MSE, RMSE, confusion matrices, and classification reports

## 📊 Key Results & Performance

### **Machine Learning Models**
- **Binary Classification**: High accuracy for COVID vs Non-COVID detection
- **Severity Regression**: Mean Absolute Error (MAE) optimization for precise severity prediction
- **Multi-class Classification**: Robust categorization into clinical severity levels
- **Dual-Input Models**: Enhanced performance using segmentation mask information

### **Expert Validation Platform**
- **Unbiased Assessment**: Blind evaluation protocol prevents AI prediction influence
- **Comprehensive Metrics**: Agreement rates, prediction differences, and statistical analysis
- **Clinical Relevance**: Real-world validation by medical professionals

## 🛠️ Technology Stack

### **Backend (Python)**
- **Deep Learning**: TensorFlow/Keras, EfficientNetB0, DenseNet121
- **Data Processing**: OpenCV, NumPy, Pandas, scikit-learn
- **Visualization**: Matplotlib, Seaborn
- **Development**: Google Colab, Jupyter Notebooks

### **Frontend (React)**
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
FYP-Data-Science/
├── code.py                    # Main ML pipeline with binary classification
├── custom_model.py           # Dual-input severity regression model
├── custom_model_2.py         # Advanced CNN severity classification
├── covid-severity-predictor/ # React web application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── data/            # Sample data and AI predictions
│   │   └── types.ts         # TypeScript definitions
│   ├── public/images/       # X-ray images for evaluation
│   └── README.md           # Web app documentation
├── DEPLOYMENT.md            # Deployment instructions
├── package.json             # Project dependencies
└── README.md               # Main project documentation
```

## 🚀 Getting Started

### **Machine Learning Models**

1. **Environment Setup**:
   ```bash
   pip install tensorflow opencv-python numpy pandas scikit-learn matplotlib seaborn
   ```

2. **Data Preparation**:
   - Download COVIDQU dataset from Kaggle
   - Run data preprocessing scripts
   - Calculate severity scores using segmentation masks

3. **Model Training**:
   ```python
   # Binary classification
   python code.py
   
   # Custom severity models
   python custom_model.py
   python custom_model_2.py
   ```

### **Web Application**

1. **Installation**:
   ```bash
   cd covid-severity-predictor
   npm install
   ```

2. **Development**:
   ```bash
   npm start
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

## 🎯 Use Cases

### **Clinical Research**
- **AI Model Validation**: Expert radiologists evaluate AI prediction accuracy
- **Performance Benchmarking**: Systematic comparison of human vs machine assessment
- **Clinical Deployment**: Evidence-based decisions for AI integration in healthcare

### **Medical Education**
- **Training Tool**: Medical students practice severity assessment
- **Case Studies**: Curated collection of COVID-19 X-ray cases
- **Performance Tracking**: Monitor assessment skills over time

### **Research Applications**
- **Dataset Validation**: Verify AI model performance on real-world data
- **Algorithm Development**: Iterative improvement based on expert feedback
- **Clinical Trials**: Support for AI-assisted diagnosis studies

## 🔍 Key Features

### **Machine Learning**
- ✅ Multi-modal severity prediction (binary + regression + classification)
- ✅ Transfer learning with state-of-the-art architectures
- ✅ Comprehensive evaluation metrics and visualizations
- ✅ Robust data preprocessing and augmentation
- ✅ Model interpretability and explainability

### **Web Application**
- ✅ Expert-friendly assessment interface
- ✅ Blind evaluation protocol for unbiased assessment
- ✅ Real-time comparison and statistical analysis
- ✅ Progress tracking and completion monitoring
- ✅ Responsive design for various devices


## 🙏 Acknowledgments

- **Medical Professionals**: Expert radiologists providing clinical validation
- **Research Community**: Open-source contributions and dataset providers
- **Academic Institutions**: Support for research and development
- **Open Source Projects**: TensorFlow, React, and other foundational technologies

---

**Note**: This project is designed for research and educational purposes. Clinical deployment requires additional validation, regulatory approval, and institutional review board clearance.
