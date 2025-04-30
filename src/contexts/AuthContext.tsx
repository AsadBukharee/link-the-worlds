
import React, { createContext, useState, useEffect, useContext } from "react";
import { User } from "@/types/api";
import { authService } from "@/services/authService";
import { userService } from "@/services/userService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  registeredPhone: string;
  login: (phone: string, password: string) => Promise<void>;
  register: (phone: string, cnic: string, password: string, fullName: string) => Promise<void>;
  verifyOtp: (phone: string, otp: string) => Promise<boolean>;
  resendOtp: (phone: string) => Promise<boolean>;
  setRegisteredPhone: (phone: string) => void;
  logout: () => void;
  updateUserData: () => Promise<User | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [registeredPhone, setRegisteredPhone] = useState<string>("");

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
      // After registration, store the phone number to use in OTP verification
      setRegisteredPhone(phone);
      // We don't login after registration - instead we'll redirect to OTP verification
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const verifyOtp = async (phone: string, otp: string) => {
    setIsLoading(true);
    try {
      const response = await authService.verifyOtp({ phone, otp });
      
      if (response.success && response.user) {
        setUser(response.user);
        return true;
      }
      return false;
    } catch (error) {
      console.error("OTP verification failed:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const resendOtp = async (phone: string) => {
    try {
      await authService.resendOtp({ phone });
      return true;
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      return false;
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
    registeredPhone,
    login,
    register,
    verifyOtp,
    resendOtp,
    setRegisteredPhone,
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
