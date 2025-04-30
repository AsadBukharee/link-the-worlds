import React, { createContext, useState, useEffect, useContext } from "react";
import { User } from "@/types/api";
import { authService } from "@/services/authService";
import { userService } from "@/services/userService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phone: string, password: string) => Promise<void>;
  register: (phone: string, cnic: string, password: string, fullName: string) => Promise<void>;
  logout: () => void;
  updateUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to get the current user data
  const updateUserData = async () => {
    try {
      if (authService.isAuthenticated()) {
        const userData = await userService.getCurrentUser();
        setUser(userData);
        return userData;
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      authService.logout();
      setUser(null);
    }
    return null;
  };

  useEffect(() => {
    // Check if user is authenticated on mount
    const checkAuth = async () => {
      try {
        await updateUserData();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (phone: string, password: string) => {
    setIsLoading(true);
    
    try {
      const tokenResponse = await authService.login({ phone, password });
      
      // If the API returns user data with the token, use it
      if (tokenResponse.user) {
        setUser(tokenResponse.user);
      } else {
        // Otherwise fetch the user data
        await updateUserData();
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (phone: string, cnic: string, password: string, fullName: string) => {
    setIsLoading(true);
    
    try {
      await authService.register({ phone, cnic, password, full_name: fullName });
      // After registration, login the user
      await login(phone, password);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
