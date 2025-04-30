
import { Post, Problem, Campaign } from "@/types/api";
import { Post as UiPost } from "@/types/post";
import { Problem as UiProblem } from "@/types/problem";

export const convertToUiPost = (post: Post): UiPost => {
  return {
    id: post.id.toString(), // Convert to string for consistency
    title: post.title,
    content: post.content,
    image: post.image_url || "",
    author: post.author || {},
    authorId: post.author_id || 0,
    date: post.created_at || "",
    likes: post.likes_count || 0,
    shares: post.shares_count || 0
  };
};

export const convertToUiProblem = (problem: Problem): UiProblem => {
  return {
    id: problem.id.toString(), // Convert to string for consistency
    title: problem.title,
    description: problem.description,
    image: problem.image_url || "",
    author: problem.author || {},
    authorId: problem.author_id || 0,
    date: problem.created_at || "",
    votes: problem.votes_count || 0,
    hasVoted: problem.has_voted || false,
    comments: problem.comments || []
  };
};

export const convertToCampaignWithDefaults = (campaign: Campaign): Campaign => {
  return {
    ...campaign,
    // Provide default values for compatibility with existing components
    collected_amount: campaign.current_amount,
    donors: campaign.donors || 0
  };
};
