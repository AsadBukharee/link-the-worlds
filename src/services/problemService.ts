
import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import { CommentCreateRequest, Problem, ProblemCreateRequest, ProblemVoteResponse } from "@/types/api";

export const problemService = {
  // Get all problems
  async getAllProblems(): Promise<Problem[]> {
    const response = await apiClient.get<{ results: Problem[] }>(API_ENDPOINTS.PROBLEMS);
    return response.results || [];
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
  async voteForProblem(problemId: number): Promise<ProblemVoteResponse> {
    return await apiClient.post<ProblemVoteResponse>(
      API_ENDPOINTS.PROBLEM_VOTE(problemId),
      {},
      true
    );
  },
  
  // Add comment to problem
  async addCommentToProblem(problemId: number, commentData: CommentCreateRequest): Promise<any> {
    return await apiClient.post(
      API_ENDPOINTS.PROBLEM_DETAIL(problemId),
      commentData,
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
