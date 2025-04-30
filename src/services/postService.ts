
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Post, PostCreateRequest, PostUpdateRequest } from "@/types/api";

export const postService = {
  // Get all posts
  async getAllPosts(): Promise<Post[]> {
    const response = await apiClient.get<{ results: Post[] }>(API_ENDPOINTS.POSTS);
    return response.results || [];
  },

  // Get recent posts
  async getRecentPosts(): Promise<Post[]> {
    return await apiClient.get<Post[]>(API_ENDPOINTS.RECENT_POSTS);
  },

  // Get posts by date range
  async getPostsByDateRange(startDate: string, endDate: string): Promise<Post[]> {
    return await apiClient.get<Post[]>(`${API_ENDPOINTS.POSTS_BY_DATE}?start_date=${startDate}&end_date=${endDate}`);
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
    await apiClient.delete(
      API_ENDPOINTS.POST_DETAIL(postId),
      true
    );
  },

  // Like a post
  async likePost(postId: number): Promise<any> {
    return await apiClient.post(
      API_ENDPOINTS.LIKE_POST(postId),
      {},
      true
    );
  },

  // Share a post
  async sharePost(postId: number): Promise<any> {
    return await apiClient.post(
      API_ENDPOINTS.SHARE_POST(postId),
      {},
      true
    );
  }
};

// Export individual functions for direct imports
export const {
  getAllPosts,
  getRecentPosts,
  getPostsByDateRange,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
  sharePost
} = postService;
