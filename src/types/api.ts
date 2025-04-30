
// Adding any missing types needed for our API integration

// Auth types
export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

// User types
export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  cnic?: string;
  is_verified?: boolean;
  date_joined?: string;
}

export interface UserUpdateRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone: string;
  cnic: string;
}

// Post types
export interface Post {
  id: string;
  title: string;
  content: string;
  author?: string;
  author_id?: number;
  created_at?: string;
  updated_at?: string;
  image_url?: string;
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

// Problem types
export interface Problem {
  id: number;
  title: string;
  description: string;
  author?: string;
  author_id?: number;
  created_at?: string;
  updated_at?: string;
  image_url?: string;
  votes_count?: number;
  comments_count?: number;
  status?: string;
}

export interface ProblemCreateRequest {
  title: string;
  description: string;
  image_url?: string;
}

export interface Comment {
  id: number;
  text: string;
  author: string;
  created_at: string;
}

// Campaign types
export interface Campaign {
  id: number;
  title: string;
  description: string;
  target_amount: number;
  current_amount: number;
  start_date: string;
  end_date: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  status: string;
}

// Donation types
export interface Donation {
  id: number;
  user?: number;
  campaign: number;
  amount: number;
  transaction_id: string;
  purpose?: string;
  privacy_option: string;
  created_at: string;
  donor_name?: string;
}

export interface DonationCreateRequest {
  campaign: number;
  amount: number;
  transaction_id: string;
  purpose?: string;
  privacy_option: string;
}

// Sponsor types
export interface Sponsor {
  id: number;
  user?: number;
  name: string;
  email: string;
  phone?: string;
  fund_type: string;
  amount: number;
  created_at: string;
}

export interface SponsorCreateRequest {
  name: string;
  email: string;
  phone?: string;
  fund_type: string;
  amount: number;
}

export interface FundType {
  id: number;
  name: string;
  description: string;
}
