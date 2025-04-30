
import { Post, Problem, Campaign } from "@/types/api";
import { Post as UiPost } from "@/types/post";
import { Problem as UiProblem, Comment as UiComment } from "@/types/problem";

export const convertToUiPost = (post: Post): UiPost => {
  return {
    id: post.id.toString(), // Convert to string for consistency
    title: post.title,
    content: post.content,
    imageUrl: post.image_url || "",
    author: post.author || {},
    date: post.created_at || "",
  };
};

export const convertToUiProblem = (problem: Problem): UiProblem => {
  return {
    id: problem.id.toString(), // Convert to string for consistency
    title: problem.title,
    description: problem.description,
    imageUrl: problem.image_url || "",
    author: problem.author?.full_name || "",
    author_id: problem.author_id || 0, // Changed from authorId to author_id to match API type
    date: problem.created_at || "",
    votes: problem.votes_count || 0,
    hasVoted: problem.has_voted || false,
    comments: problem.comments ? problem.comments.map(comment => ({
      id: comment.id.toString(),
      text: comment.text,
      author: comment.author || "",
      date: comment.created_at || new Date().toISOString()
    })) : []
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
