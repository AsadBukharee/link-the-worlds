
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Post, PostCreateRequest, PostUpdateRequest } from "@/types/api";

// Export the entire service object
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
  async getPostsByDateRange(startDate: Date, endDate: Date): Promise<Post[]> {
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];
    return await apiClient.get<Post[]>(
      `${API_ENDPOINTS.POSTS_BY_DATE}?start_date=${formattedStartDate}&end_date=${formattedEndDate}`
    );
  }
};

// Export individual functions
export const getAllPosts = postService.getAllPosts;
export const getRecentPosts = postService.getRecentPosts;
export const getPostById = postService.getPostById;
export const createPost = postService.createPost;
export const updatePost = postService.updatePost;
export const deletePost = postService.deletePost;
export const getPostsByDateRange = postService.getPostsByDateRange;
