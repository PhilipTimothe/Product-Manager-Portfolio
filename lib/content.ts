export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  meta: [string, string, string]; // [name, year, category]
  description: string;
}

export const caseStudies: Project[] = [
  {
    id: "whitecoatlab",
    title: "WhiteCoatLab.co",
    subtitle: "Designing Trust Through Creativity",
    image: "/WhiteCoatLab_Logo.png",
    href: "/projects/whitecoatlab",
    meta: ["WhiteCoatLab.co", "2023 – 2025", "Brand & Strategy"],
    description: "I led the strategy, design, and build of WhiteCoatLab's digital presence. From market research and user journey mapping to wireframes and execution, I aligned the brand identity with our creative services in film and photography. The site was designed to showcase portfolio work, reinforce trust with first-time visitors, and scale as a platform for future case studies."
  },
  {
    id: "micro-documentary",
    title: "It All Started",
    subtitle: "Crafting Authenticity in a Noisy Market",
    image: "/SquareStarted.png",
    href: "/projects/micro-documentary",
    meta: ["It All Started", "2024 – 2025", "Product Strategy & Execution"],
    description: "I led the end-to-end development of a micro-documentary for an emerging music artist, from discovery workshops through production and delivery. I aligned stakeholders on vision, defined the roadmap, and managed execution across multi-location shoots that positioned the artist for growth."
  },
  {
    id: "salary-prediction-analysis",
    title: "Salary Prediction Analysis",
    subtitle: "Turning Patterns into Predictions",
    image: "/DataPrediction.png",
    href: "/projects/salary-prediction-analysis",
    meta: ["Salary Prediction", "2024 – 2025", "Data Science | Analytics"],
    description: "I built predictive models to analyze salary trends in the data science industry using historical data. By exploring factors like experience level, job role, company size, and remote work, I delivered insights and actionable recommendations that help both companies and professionals make data-driven decisions about compensation."
  },
  {
    id: "loan-default-risk-analysis",
    title: "Loan Default Risk Analysis",
    subtitle: "From Prediction to Protection",
    image: "/LoanDafault.png",
    href: "/projects/loan-default-risk-analysis",
    meta: ["Loan Default Risk", "2024 – 2025", "Data Science | ML"],
    description: "I developed predictive models to analyze loan default patterns and identify high-risk borrowers. By combining data preprocessing, feature engineering, and advanced modeling, I built insights and recommendations to help financial institutions reduce defaults and improve lending strategies."
  }
];

// Legacy interface for backward compatibility (if needed)
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  category: string;
  problem: string;
  approach: string;
  outcome: string;
  results: string[];
  client?: string;
  years?: string;
}