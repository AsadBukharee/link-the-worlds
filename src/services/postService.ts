
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Post, PostCreateRequest, PostUpdateRequest } from "@/types/api";

export const postService = {
  // Get all posts
  async getAllPosts(): Promise<Post[]> {
    return await apiClient.get<Post[]>(API_ENDPOINTS.POSTS);
  },

  // Get recent posts
  async getRecentPosts(): Promise<Post[]> {
    return await apiClient.get<Post[]>(API_ENDPOINTS.RECENT_POSTS);
  },

  // Get post by ID
  async getPostById(postId: number): Promise<Post> {
    return await apiClient.get<Post>(API_ENDPOINTS.POST_DETAIL(postId));
  },

  // Create a new post
  async createPost(postData: PostCreateRequest): Promise<Post> {
    return await apiClient.post<Post>(
      API_ENDPOINTS.POSTS, 
      postData, 
      true
    );
  },

  // Update a post
  async updatePost(postId: number, postData: PostUpdateRequest): Promise<Post> {
    return await apiClient.put<Post>(
      API_ENDPOINTS.POST_DETAIL(postId), 
      postData, 
      true
    );
  },

  // Delete a post
  async deletePost(postId: number): Promise<void> {
    await apiClient.delete(API_ENDPOINTS.POST_DETAIL(postId), true);
  },

  // Get posts by date range
  async getPostsByDateRange(startDate: string, endDate: string): Promise<Post[]> {
    return await apiClient.get<Post[]>(
      `${API_ENDPOINTS.POSTS_BY_DATE}?start_date=${startDate}&end_date=${endDate}`
    );
  }
};

// Export individual functions for direct imports
export const { 
  getAllPosts, 
  getRecentPosts, 
  getPostById, 
  createPost, 
  updatePost, 
  deletePost, 
  getPostsByDateRange 
} = postService;
