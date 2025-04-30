
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { Problem, ProblemCreateRequest } from "@/types/api";

export const problemService = {
  // Get all problems
  async getAllProblems(): Promise<Problem[]> {
    return await apiClient.get<Problem[]>(API_ENDPOINTS.PROBLEMS);
  },

  // Get problem by ID
  async getProblemById(problemId: number): Promise<Problem> {
    return await apiClient.get<Problem>(API_ENDPOINTS.PROBLEM_DETAIL(problemId));
  },

  // Create a new problem
  async createProblem(problemData: ProblemCreateRequest): Promise<Problem> {
    return await apiClient.post<Problem>(
      API_ENDPOINTS.PROBLEMS, 
      problemData, 
      true
    );
  },
  
  // Vote for a problem
  async voteForProblem(problemId: number): Promise<any> {
    return await apiClient.post<any>(
      API_ENDPOINTS.PROBLEM_VOTE(problemId),
      {},
      true
    );
  },
  
  // Add comment to problem
  async addCommentToProblem(problemId: number, commentText: string): Promise<any> {
    return await apiClient.post<any>(
      API_ENDPOINTS.PROBLEM_COMMENTS(problemId),
      { text: commentText },
      true
    );
  }
};

// Export individual functions for direct imports
export const { 
  getAllProblems, 
  getProblemById, 
  createProblem,
  voteForProblem,
  addCommentToProblem
} = problemService;
