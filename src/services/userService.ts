
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { User, UserProfileUpdateRequest } from "@/types/api";

export const userService = {
  // Get current user profile
  async getCurrentUser(): Promise<User> {
    return await apiClient.get<User>(
      API_ENDPOINTS.USER_ME, 
      true
    );
  },

  // Get user details by ID
  async getUserById(userId: number): Promise<User> {
    return await apiClient.get<User>(
      API_ENDPOINTS.USER_DETAIL(userId), 
      true
    );
  },

  // Update user profile information
  async updateProfile(userData: UserProfileUpdateRequest): Promise<User> {
    return await apiClient.put<User>(
      API_ENDPOINTS.UPDATE_PROFILE,
      userData, 
      true
    );
  },

  // Upload user avatar
  async uploadAvatar(imageFile: File): Promise<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    return await apiClient.postFormData(
      API_ENDPOINTS.UPLOAD_AVATAR,
      formData,
      true
    );
  },
  
  // Upload user cover image
  async uploadCover(imageFile: File, source: string = 'web'): Promise<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('source', source);
    
    return await apiClient.postFormData(
      API_ENDPOINTS.UPLOAD_COVER,
      formData,
      true
    );
  }
};
