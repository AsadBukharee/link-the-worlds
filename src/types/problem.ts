
export interface Problem {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  votes: number;
  comments: Comment[];
  imageUrl?: string;
  hasVoted?: boolean;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}
