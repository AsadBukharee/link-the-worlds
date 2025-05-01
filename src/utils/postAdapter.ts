
import { Post as ApiPost } from "@/types/api";
import { Post as LocalPost } from "@/types/post";

export const adaptApiPostToLocalPost = (apiPost: ApiPost): LocalPost => {
  return {
    id: apiPost.id.toString(),
    title: apiPost.title,
    content: apiPost.content,
    author: apiPost.author.username,
    date: apiPost.created_at,
    imageUrl: apiPost.image_url
  };
};

export const adaptApiPostsToLocalPosts = (apiPosts: ApiPost[]): LocalPost[] => {
  return apiPosts.map(adaptApiPostToLocalPost);
};
