
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Campaign, CampaignCreateRequest, CampaignDonor, CampaignUpdateRequest } from "@/types/api";

export const campaignService = {
  // Get all campaigns
  async getAllCampaigns(): Promise<Campaign[]> {
    return await apiClient.get<Campaign[]>(API_ENDPOINTS.CAMPAIGNS);
  },

  // Get campaign by ID
  async getCampaignById(campaignId: string): Promise<Campaign> {
    return await apiClient.get<Campaign>(API_ENDPOINTS.CAMPAIGN_DETAIL(campaignId));
  },

  // Create a new campaign (admin only)
  async createCampaign(campaignData: CampaignCreateRequest): Promise<Campaign> {
    return await apiClient.post<Campaign>(
      API_ENDPOINTS.CAMPAIGNS, 
      campaignData, 
      true
    );
  },

  // Update a campaign (admin only)
  async updateCampaign(
    campaignId: string, 
    campaignData: CampaignUpdateRequest
  ): Promise<Campaign> {
    return await apiClient.put<Campaign>(
      API_ENDPOINTS.CAMPAIGN_DETAIL(campaignId), 
      campaignData, 
      true
    );
  },

  // Get campaign donors
  async getCampaignDonors(campaignId: string): Promise<CampaignDonor[]> {
    return await apiClient.get<CampaignDonor[]>(API_ENDPOINTS.CAMPAIGN_DONORS(campaignId));
  }
};
