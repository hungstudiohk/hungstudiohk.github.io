
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapResponse {
  overview: string;
  techStack: string[];
  milestones: {
    phase: string;
    details: string;
  }[];
  aiRecommendation: string;
}
