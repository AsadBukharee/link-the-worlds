
// Common response interfaces
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Authentication interfaces
export interface LoginRequest {
  username: string;
  password: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface RefreshTokenRequest {
  refresh: string;
}

// User interfaces
export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  cnic?: string;
  is_verified?: boolean;
}

export interface UserRegistrationRequest {
  username: string;
  email: string;
  password: string;
  phone: string;
  cnic: string;
}

export interface UserUpdateRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

// Post interfaces
export interface Post {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  author: User;
  created_at: string;
  updated_at: string;
}

export interface PostCreateRequest {
  title: string;
  content: string;
  image_url?: string;
}

export interface PostUpdateRequest {
  title?: string;
  content?: string;
  image_url?: string;
}

// Problem interfaces
export interface Problem {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  author: User;
  votes: number;
  created_at: string;
  updated_at: string;
  comments?: ProblemComment[];
  has_voted?: boolean;
}

export interface ProblemComment {
  id: number;
  text: string;
  author: User;
  created_at: string;
}

export interface ProblemCreateRequest {
  title: string;
  description: string;
  image_url?: string;
}

export interface CommentCreateRequest {
  text: string;
}

// Campaign interfaces
export interface Campaign {
  id: string;
  title: string;
  description: string;
  target_amount: number;
  collected_amount: number;
  start_date: string;
  end_date: string;
  image: string;
  donors: CampaignDonor[];
}

export interface CampaignDonor {
  name: string;
  amount: number;
  isAnonymous: boolean;
  date: string;
}

export interface CampaignCreateRequest {
  title: string;
  description: string;
  target_amount: number;
  start_date: string;
  end_date: string;
  image_url: string;
}

export interface CampaignUpdateRequest {
  title?: string;
  description?: string;
  target_amount?: number;
  start_date?: string;
  end_date?: string;
  image_url?: string;
}

// Donation interfaces
export interface Donation {
  id: number;
  campaign: Campaign;
  user: User;
  amount: number;
  transaction_id: string;
  purpose: string;
  privacy_option: "public" | "private";
  note?: string;
  created_at: string;
}

export interface DonationCreateRequest {
  campaign: number;
  amount: number;
  transaction_id: string;
  purpose: string;
  privacy_option: "public" | "private";
  note?: string;
}

// Sponsor interfaces
export interface Sponsor {
  id: number;
  name: string;
  email: string;
  phone: string;
  fund_type: string;
  amount: number;
  created_at: string;
}

export interface SponsorCreateRequest {
  name: string;
  email: string;
  phone: string;
  fund_type: string;
  amount: number;
}

export interface FundType {
  id: string;
  name: string;
}
