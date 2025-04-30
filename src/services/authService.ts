
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { LoginRequest, TokenResponse, UserRegistrationRequest, OtpVerificationRequest, OtpVerificationResponse, ResendOtpRequest } from "@/types/api";

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
    const request = { refresh: refreshToken };
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
  
  // Verify OTP for phone number
  async verifyOtp(verificationData: OtpVerificationRequest): Promise<OtpVerificationResponse> {
    const response = await apiClient.post<OtpVerificationResponse>(
      API_ENDPOINTS.VERIFY_OTP,
      verificationData
    );
    
    // If verification is successful and returns tokens, set them
    if (response.success && response.access && response.refresh) {
      apiClient.setTokens({
        access: response.access,
        refresh: response.refresh,
        user: response.user
      });
    }
    
    return response;
  },
  
  // Resend OTP to phone number
  async resendOtp(phoneData: ResendOtpRequest): Promise<any> {
    return await apiClient.post(
      API_ENDPOINTS.RESEND_OTP,
      phoneData
    );
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
