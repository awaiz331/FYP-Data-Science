export interface XRayImage {
  id: string;
  filename: string;
  imageUrl: string;
  aiPrediction: number;
  aiSeverity: "mild" | "moderate" | "severe" | "critical";
  doctorPrediction?: number;
  doctorSeverity?: "mild" | "moderate" | "severe" | "critical";
  isPredicted: boolean;
  trueSeverity?: number;
  trueSeverityCategory?: string;
}

export interface ComparisonResult {
  imageId: string;
  aiPrediction: number;
  doctorPrediction: number;
  difference: number;
  agreement: boolean;
}

export interface SeverityLevel {
  label: "mild" | "moderate" | "severe" | "critical";
  color: string;
  range: [number, number];
  description: string;
}

export interface PredictionData {
  original_path: string;
  true_class: string;
  true_severity: number;
  true_severity_category: string;
  predicted_severity_category: string;
  predicted_probability: number;
  predicted_probabilities: number[];
}
