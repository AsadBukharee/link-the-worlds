
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Campaign, CampaignCreateRequest, CampaignDonor, CampaignUpdateRequest } from "@/types/api";

export const campaignService = {
  // Get all campaigns
  async getAllCampaigns(): Promise<Campaign[]> {
    return await apiClient.get<Campaign[]>(API_ENDPOINTS.CAMPAIGNS);
  },

  // Get campaign by ID
  async getCampaignById(campaignId: string | number): Promise<Campaign> {
    return await apiClient.get<Campaign>(API_ENDPOINTS.CAMPAIGN_DETAIL(campaignId));
  },

  // Create a new campaign
  async createCampaign(campaignData: CampaignCreateRequest): Promise<Campaign> {
    return await apiClient.post<Campaign>(
      API_ENDPOINTS.CAMPAIGNS,
      campaignData,
      true
    );
  },

  // Update a campaign
  async updateCampaign(campaignId: string | number, campaignData: CampaignUpdateRequest): Promise<Campaign> {
    return await apiClient.put<Campaign>(
      API_ENDPOINTS.CAMPAIGN_DETAIL(campaignId),
      campaignData,
      true
    );
  },

  // Get campaign donors
  async getCampaignDonors(campaignId: string | number): Promise<CampaignDonor[]> {
    return await apiClient.get<CampaignDonor[]>(
      API_ENDPOINTS.CAMPAIGN_DONORS(campaignId)
    );
  }
};

// Export individual functions for direct imports
export const {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  updateCampaign,
  getCampaignDonors
} = campaignService;
