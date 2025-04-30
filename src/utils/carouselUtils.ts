
import { carouselData } from "@/data/carouselData";
import { API_ENDPOINTS } from "@/config/api";
import { apiClient } from "@/services/apiClient";
import { CarouselItem } from "@/types/api";

/**
 * Fetches carousel items from the API
 * @returns Promise with carousel items
 */
export const fetchCarouselItems = async (): Promise<CarouselItem[]> => {
  try {
    const items = await apiClient.get<CarouselItem[]>(API_ENDPOINTS.CAROUSEL);
    return items;
  } catch (error) {
    console.error("Failed to fetch carousel items:", error);
    // Fallback to sample data if API fails
    return carouselData;
  }
};

/**
 * Creates a carousel item on the server
 * @param item The carousel item to create
 * @returns Promise with the created item
 */
export const createCarouselItem = async (item: Omit<CarouselItem, 'id' | 'created_at' | 'updated_at'>): Promise<CarouselItem> => {
  return await apiClient.post<CarouselItem>(API_ENDPOINTS.CAROUSEL, item, true);
};
