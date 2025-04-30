
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { LoginRequest, RefreshTokenRequest, TokenResponse, UserRegistrationRequest } from "@/types/api";

export const authService = {
  // Login user with phone and get tokens
  async login(credentials: LoginRequest): Promise<TokenResponse> {
    const response = await apiClient.post<TokenResponse>(
      API_ENDPOINTS.LOGIN, 
      credentials
    );
    
    apiClient.setTokens(response);
    return response;
  },

  // Refresh access token using refresh token
  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    const request: RefreshTokenRequest = { refresh: refreshToken };
    const response = await apiClient.post<TokenResponse>(
      API_ENDPOINTS.REFRESH_TOKEN, 
      request
    );
    
    apiClient.setTokens(response);
    return response;
  },

  // Register a new user with phone, CNIC, and full name
  async register(userData: UserRegistrationRequest): Promise<any> {
    return await apiClient.post(API_ENDPOINTS.REGISTER_USER, userData);
  },

  // Logout user
  logout(): void {
    apiClient.clearTokens();
  },

  // Check if user is logged in
  isAuthenticated(): boolean {
    return apiClient.isAuthenticated();
  }
};
