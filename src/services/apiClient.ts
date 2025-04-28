
import { API_BASE_URL } from "@/config/api";
import { TokenResponse } from "@/types/api";

const TOKEN_KEY = "chak64_auth_tokens";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Method to get stored tokens
  getTokens(): { access: string; refresh: string } | null {
    const tokensJson = localStorage.getItem(TOKEN_KEY);
    if (!tokensJson) return null;
    
    try {
      return JSON.parse(tokensJson);
    } catch (error) {
      console.error("Failed to parse tokens from localStorage");
      return null;
    }
  }

  // Method to store tokens
  setTokens(tokens: TokenResponse): void {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
  }

  // Method to clear tokens (logout)
  clearTokens(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getTokens() !== null;
  }

  // Method for GET requests
  async get<T>(endpoint: string, authenticated = false): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authenticated) {
      const tokens = this.getTokens();
      if (!tokens) {
        throw new Error("Authentication required but no tokens available");
      }
      headers["Authorization"] = `Bearer ${tokens.access}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  // Method for POST requests
  async post<T>(endpoint: string, data: any, authenticated = false): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authenticated) {
      const tokens = this.getTokens();
      if (!tokens) {
        throw new Error("Authentication required but no tokens available");
      }
      headers["Authorization"] = `Bearer ${tokens.access}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  // Method for PUT requests
  async put<T>(endpoint: string, data: any, authenticated = false): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authenticated) {
      const tokens = this.getTokens();
      if (!tokens) {
        throw new Error("Authentication required but no tokens available");
      }
      headers["Authorization"] = `Bearer ${tokens.access}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  // Method for DELETE requests
  async delete<T>(endpoint: string, authenticated = false): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authenticated) {
      const tokens = this.getTokens();
      if (!tokens) {
        throw new Error("Authentication required but no tokens available");
      }
      headers["Authorization"] = `Bearer ${tokens.access}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
