
export const API_BASE_URL = "https://chak-64.vercel.app/api";

export const API_ENDPOINTS = {
  // Authentication
  LOGIN: "/users/login/",
  REFRESH_TOKEN: "/auth/refresh/",
  
  // Users
  REGISTER_USER: "/users/register/",
  VERIFY_OTP: "/users/verify-otp/",
  RESEND_OTP: "/users/resend-otp/",
  USER_DETAIL: (id: number) => `/users/${id}/`,
  USER_ME: "/users/me/", 
  UPLOAD_AVATAR: "/users/upload_avatar/",
  UPLOAD_COVER: "/users/upload_cover/",
  UPDATE_PROFILE: "/users/me/",
  
  // Posts
  POSTS: "/posts/",
  POST_DETAIL: (id: number) => `/posts/${id}/`,
  RECENT_POSTS: "/posts/recent/",
  POSTS_BY_DATE: "/posts/date-range/",
  LIKE_POST: (id: number) => `/posts/${id}/like/`,
  SHARE_POST: (id: number) => `/posts/${id}/share/`,
  
  // Problems
  PROBLEMS: "/problems/",
  PROBLEM_DETAIL: (id: number) => `/problems/${id}/`,
  PROBLEM_VOTE: (id: number) => `/problems/${id}/vote/`,
  
  // Media
  CAROUSEL: "/carousel/",
  CALL_TO_ACTION: "/call-to-action/",
  INFO_CARDS: "/info-cards/",
  ADS: "/ads/",
  NEWS: "/news/",
  BLOGS: "/blogs/",
  
  // Campaigns
  CAMPAIGNS: "/campaigns/",
  CAMPAIGN_DETAIL: (id: string | number) => `/campaigns/${id}/`,
  CAMPAIGN_DONORS: (id: string | number) => `/campaigns/${id}/donors/`,
  
  // Donations
  DONATIONS: "/donations/",
  CAMPAIGN_DONATIONS: (campaignId: string | number) => `/donations/campaigns/${campaignId}/`,
  USER_DONATIONS: (userId: number) => `/donations/user/${userId}/`,
  
  // Sponsors
  SPONSORS: "/sponsors/",
  FUND_TYPES: "/sponsors/fund-types/"
};
