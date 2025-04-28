
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Donation, DonationCreateRequest } from "@/types/api";

export const donationService = {
  // Create a donation
  async createDonation(donationData: DonationCreateRequest): Promise<Donation> {
    return await apiClient.post<Donation>(
      API_ENDPOINTS.DONATIONS, 
      donationData, 
      true
    );
  },

  // Get donations for a campaign
  async getCampaignDonations(campaignId: string): Promise<Donation[]> {
    return await apiClient.get<Donation[]>(API_ENDPOINTS.CAMPAIGN_DONATIONS(campaignId));
  },

  // Get user donations
  async getUserDonations(userId: number): Promise<Donation[]> {
    return await apiClient.get<Donation[]>(
      API_ENDPOINTS.USER_DONATIONS(userId), 
      true
    );
  }
};
