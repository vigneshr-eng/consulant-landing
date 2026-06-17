export interface Consultant {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  avatar: string;
  specialty: string;
  availability: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  meetingSnippet: {
    author: string;
    avatar: string;
    timeAgo: string;
    message: string;
  }[];
  images: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  type: 'whiteboard' | 'chat' | 'scheduling' | 'security';
}
