import { Product } from '@/types';

export const products: Product[] = [
  {
    id: "p1",
    title: "AI Disease Detection System",
    price: 4999,
    description: "Advanced computer vision system for early disease detection and diagnosis using artificial intelligence.",
    image: "https://picsum.photos/seed/aidisease/600/400",
    category: "Healthcare AI",
    features: [
      "Real-time disease detection",
      "High accuracy diagnosis",
      "Cloud-based processing",
      "Multi-disease support",
      "API integration ready"
    ],
    specifications: {
      "Accuracy": "95%+",
      "Processing Time": "< 2 seconds",
      "Supported Diseases": "50+",
      "API Response": "RESTful",
      "Deployment": "Cloud/On-premise"
    }
  },
  {
    id: "p2",
    title: "Predictive Maintenance Platform",
    price: 3999,
    description: "Machine learning models that predict equipment failures and optimize maintenance schedules.",
    image: "https://picsum.photos/seed/maintenance/600/400",
    category: "Industrial AI",
    features: [
      "Predictive analytics",
      "Real-time monitoring",
      "Automated alerts",
      "Cost optimization",
      "IoT integration"
    ],
    specifications: {
      "Prediction Accuracy": "92%+",
      "Data Sources": "IoT sensors",
      "Alert Response": "< 5 minutes",
      "Supported Equipment": "100+ types",
      "Integration": "Modbus, OPC UA"
    }
  },
  {
    id: "p3",
    title: "AI Logistics Optimization Suite",
    price: 4599,
    description: "Comprehensive logistics optimization using AI for route planning, load balancing, and cost reduction.",
    image: "https://picsum.photos/seed/logistics/600/400",
    category: "Logistics AI",
    features: [
      "Route optimization",
      "Load balancing",
      "Cost analysis",
      "Real-time tracking",
      "Multi-vehicle support"
    ],
    specifications: {
      "Route Optimization": "Dynamic",
      "Cost Reduction": "25-40%",
      "Vehicle Support": "Unlimited",
      "Real-time Updates": "Yes",
      "API Access": "Full REST API"
    }
  },
  {
    id: "p4",
    title: "AI + AR Training Platform",
    price: 5499,
    description: "Immersive industrial training platform combining artificial intelligence with augmented reality.",
    image: "https://picsum.photos/seed/aiar/600/400",
    category: "Training AI",
    features: [
      "AR visualization",
      "AI-powered guidance",
      "Progress tracking",
      "Custom scenarios",
      "Multi-user support"
    ],
    specifications: {
      "AR Support": "HoloLens, Mobile",
      "Training Modules": "50+",
      "User Capacity": "Unlimited",
      "Analytics": "Real-time",
      "Customization": "Full"
    }
  },
  {
    id: "p5",
    title: "Smart Customer Analytics",
    price: 3299,
    description: "AI-powered customer behavior analysis and personalized marketing automation platform.",
    image: "https://picsum.photos/seed/analytics/600/400",
    category: "Analytics AI",
    features: [
      "Customer segmentation",
      "Behavior prediction",
      "Personalized recommendations",
      "Campaign automation",
      "ROI tracking"
    ],
    specifications: {
      "Data Processing": "Real-time",
      "Segmentation": "Dynamic",
      "Prediction Accuracy": "88%+",
      "Integration": "CRM, Marketing tools",
      "Compliance": "GDPR, CCPA"
    }
  },
  {
    id: "p6",
    title: "AI Content Generation Engine",
    price: 2799,
    description: "Advanced content generation system for marketing, documentation, and creative writing.",
    image: "https://picsum.photos/seed/content/600/400",
    category: "Content AI",
    features: [
      "Multi-format content",
      "Brand voice consistency",
      "SEO optimization",
      "Plagiarism detection",
      "Collaborative editing"
    ],
    specifications: {
      "Content Types": "20+ formats",
      "Languages": "50+",
      "Generation Speed": "< 30 seconds",
      "Quality Score": "95%+",
      "API Rate Limit": "1000/hour"
    }
  }
]; 