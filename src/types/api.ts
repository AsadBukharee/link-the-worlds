
// Adding any missing types needed for our API integration

// Auth types
export interface TokenResponse {
  access: string;
  refresh: string;
  user?: User;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface RefreshTokenRequest {
  refresh: string;
}

export interface UserRegistrationRequest {
  phone: string;
  cnic: string;
  password: string;
  full_name: string;
}

// User types
export interface User {
  id: number;
  phone: string;
  cnic?: string;
  email?: string;
  full_name?: string;
  date_of_birth?: string;
  father_name?: string;
  resident?: boolean;
  about?: string;
  tagline?: string;
  profession?: string;
  education_level?: string;
  gender?: string;
  avatar?: string;
  cover?: string;
  date_joined?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserProfileUpdateRequest {
  email?: string;
  date_of_birth?: string;
  father_name?: string;
  resident?: boolean;
  about?: string;
  tagline?: string;
  profession?: string;
  education_level?: string;
  gender?: string;
}

export interface RegisterRequest {
  phone: string;
  cnic: string;
  password: string;
  full_name: string;
}

// Post types
export interface Post {
  id: string | number;
  title: string;
  content: string;
  author?: any;
  author_id?: number;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
  likes_count?: number;
  shares_count?: number;
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
  author?: any;
  author_id?: number;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
  votes_count?: number;
  only_resident_vote?: boolean;
  has_voted?: boolean;
  // Required by ProblemCard component
  date?: string; // Mapped from created_at
  votes?: number; // Mapped from votes_count
  comments?: any[]; // Empty array or from API
}

export interface ProblemCreateRequest {
  title: string;
  description: string;
  image_url?: string;
  only_resident_vote?: boolean;
}

export interface ProblemVoteResponse {
  voted: boolean;
  votes_count: number;
  message: string;
}

export interface CommentCreateRequest {
  text: string;
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
  // For compatibility with existing code
  collected_amount?: number; // Mapped from current_amount
  donors?: number; // Calculated or provided by API
}

export interface CampaignDonor {
  name: string;
  amount: number;
  date: string;
}

export interface CampaignCreateRequest {
  title: string;
  description: string;
  target_amount: number;
  start_date: string;
  end_date: string;
  image_url?: string;
}

export interface CampaignUpdateRequest {
  title?: string;
  description?: string;
  target_amount?: number;
  start_date?: string;
  end_date?: string;
  image_url?: string;
  status?: string;
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

// Media types
export interface CarouselItem {
  id: number;
  title: string;
  tagline: string;
  image_url: string;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface CallToAction {
  id: number;
  title: string;
  text: string;
  button_text: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface InfoCard {
  id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
}

export interface Advertisement {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  expiry_date: string;
  created_at: string;
  updated_at: string;
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image_url: string;
  author: any;
  created_at: string;
  updated_at: string;
}
