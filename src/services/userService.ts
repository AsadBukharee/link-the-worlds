
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { User, UserUpdateRequest } from "@/types/api";

export const userService = {
  // Get user details by ID
  async getUserById(userId: number): Promise<User> {
    return await apiClient.get<User>(
      API_ENDPOINTS.USER_DETAIL(userId), 
      true
    );
  },

  // Update user information
  async updateUser(userId: number, userData: UserUpdateRequest): Promise<User> {
    return await apiClient.put<User>(
      API_ENDPOINTS.USER_DETAIL(userId), 
      userData, 
      true
    );
  },

  // Verify user by CNIC
  async verifyUserByCNIC(cnic: string): Promise<any> {
    return await apiClient.get<any>(`${API_ENDPOINTS.VERIFY_USER}?cnic=${cnic}`);
  }
};
