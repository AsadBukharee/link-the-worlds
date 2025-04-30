
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { FundType, Sponsor, SponsorCreateRequest } from "@/types/api";

export const sponsorService = {
  // Get all sponsors
  async getAllSponsors(): Promise<Sponsor[]> {
    return await apiClient.get<Sponsor[]>(
      API_ENDPOINTS.SPONSORS, 
      true
    );
  },

  // Create a new sponsor
  async createSponsor(sponsorData: SponsorCreateRequest): Promise<Sponsor> {
    return await apiClient.post<Sponsor>(
      API_ENDPOINTS.SPONSORS,
      sponsorData, 
      true
    );
  },

  // Get all fund types
  async getFundTypes(): Promise<FundType[]> {
    return await apiClient.get<FundType[]>(
      API_ENDPOINTS.FUND_TYPES
    );
  }
};
