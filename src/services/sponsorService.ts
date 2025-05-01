
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { FundType, Sponsor, SponsorCreateRequest } from "@/types/api";

export const sponsorService = {
  // Create a sponsorship
  async createSponsor(sponsorData: SponsorCreateRequest): Promise<Sponsor> {
    return await apiClient.post<Sponsor>(
      API_ENDPOINTS.SPONSORS, 
      sponsorData, 
      true
    );
  },

  // Get available fund types
  async getFundTypes(): Promise<FundType[]> {
    return await apiClient.get<FundType[]>(API_ENDPOINTS.FUND_TYPES);
  },

  // Get sponsorship reports (admin only)
  async getSponsorshipReports(): Promise<any> {
    return await apiClient.get<any>(
      API_ENDPOINTS.SPONSORSHIP_REPORTS, 
      true
    );
  }
};
