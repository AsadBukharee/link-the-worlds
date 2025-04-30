
import { Post as ApiPost, Problem as ApiProblem, Campaign as ApiCampaign } from "@/types/api";
import { Post as UiPost } from "@/types/post";
import { Problem as UiProblem } from "@/types/problem";

// Convert API Post to UI Post
export const convertToUiPost = (apiPost: ApiPost): UiPost => {
  return {
    id: apiPost.id,
    title: apiPost.title,
    content: apiPost.content,
    author: typeof apiPost.author === 'object' ? apiPost.author?.phone || "Unknown" : apiPost.author || "Unknown",
    date: apiPost.created_at || new Date().toISOString(),
    imageUrl: apiPost.image_url
  };
};

// Convert API Problem to UI Problem
export const convertToUiProblem = (apiProblem: ApiProblem): UiProblem => {
  return {
    id: apiProblem.id,
    title: apiProblem.title,
    description: apiProblem.description,
    date: apiProblem.created_at || new Date().toISOString(),
    votes: apiProblem.votes_count || 0,
    comments: [],
    imageUrl: apiProblem.image_url,
    author: typeof apiProblem.author === 'object' ? apiProblem.author?.phone || "Unknown" : apiProblem.author || "Unknown",
  };
};

// Convert API Campaign to UI Campaign (with needed properties for the UI)
export const convertApiCampaignToUiCampaign = (apiCampaign: ApiCampaign): ApiCampaign => {
  return {
    ...apiCampaign,
    // Map current_amount to collected_amount for UI compatibility
    collected_amount: apiCampaign.current_amount,
    // Default donors count if not provided
    donors: apiCampaign.donors || 0
  };
};
