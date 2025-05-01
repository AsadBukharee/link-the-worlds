
export const API_BASE_URL = "https://chak-64.vercel.app/api";

export const API_ENDPOINTS = {
  // Authentication
  LOGIN: "/auth/login/",
  REFRESH_TOKEN: "/auth/refresh/",
  
  // Users
  REGISTER_USER: "/users/register/",
  USER_DETAIL: (id: number) => `/users/${id}/`,
  VERIFY_USER: "/users/verify/",
  
  // Posts
  POSTS: "/posts/",
  POST_DETAIL: (id: number) => `/posts/${id}/`,
  RECENT_POSTS: "/posts/recent/",
  POSTS_BY_DATE: "/posts/date-range/",
  
  // Problems
  PROBLEMS: "/problems/",
  PROBLEM_DETAIL: (id: number) => `/problems/${id}/`,
  PROBLEM_VOTE: (id: number) => `/problems/${id}/vote/`,
  PROBLEM_COMMENTS: (id: number) => `/problems/${id}/comments/`,
  
  // Campaigns
  CAMPAIGNS: "/campaigns/",
  CAMPAIGN_DETAIL: (id: string) => `/campaigns/${id}/`,
  CAMPAIGN_DONORS: (id: string) => `/campaigns/${id}/donors/`,
  
  // Donations
  DONATIONS: "/donations/",
  CAMPAIGN_DONATIONS: (campaignId: string) => `/donations/campaigns/${campaignId}/`,
  USER_DONATIONS: (userId: number) => `/donations/user/${userId}/`,
  
  // Sponsors
  SPONSORS: "/sponsors/",
  FUND_TYPES: "/sponsors/fund-types/",
  SPONSORSHIP_REPORTS: "/sponsors/reports/"
};
