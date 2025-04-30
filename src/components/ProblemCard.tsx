
import React, { useState } from 'react';
import { Problem, ProblemVoteResponse } from '@/types/api';
import { problemService } from '@/services/problemService';
import { toast } from '@/hooks/use-toast';

interface ProblemCardProps {
  problem: Problem;
  key?: number;
  onUpdate?: (updatedProblem: Problem) => void;
}

const ProblemCard = ({ problem, onUpdate }: ProblemCardProps) => {
  const [isVoting, setIsVoting] = useState(false);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  // Format date
  const formattedDate = problem.date || problem.created_at || '';

  // Handle vote
  const handleVote = async () => {
    if (isVoting) return;
    
    setIsVoting(true);
    try {
      const response = await problemService.voteForProblem(problem.id);
      
      // Create updated problem object with the new votes count
      const updatedProblem: Problem = {
        ...problem,
        votes_count: response.votes_count,
        votes: response.votes_count, // Update both properties for compatibility
        has_voted: response.voted
      };
      
      if (onUpdate) {
        onUpdate(updatedProblem);
      }
      
      toast({
        title: response.voted ? 'ووٹ کامیاب' : 'ووٹ واپس لیا گیا',
        description: response.message,
      });
    } catch (error) {
      console.error('Failed to vote for problem:', error);
      toast({
        title: 'ووٹ ناکام',
        description: 'ووٹ دینے میں خرابی۔ براہ کرم دوبارہ کوشش کریں۔',
        variant: 'destructive',
      });
    } finally {
      setIsVoting(false);
    }
  };

  // Handle comment submission
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || isAddingComment) return;
    
    setIsAddingComment(true);
    try {
      const comment = await problemService.addCommentToProblem(problem.id, { text: commentText });
      
      // Create updated problem object with the new comment
      const updatedProblem = {
        ...problem,
        comments: [...(problem.comments || []), comment]
      };
      
      if (onUpdate) {
        onUpdate(updatedProblem);
      }
      
      setCommentText('');
      toast({
        title: 'تبصرہ شائع ہوا',
        description: 'آپ کا تبصرہ کامیابی سے شائع ہو گیا ہے۔',
      });
    } catch (error) {
      console.error('Failed to add comment:', error);
      toast({
        title: 'تبصرہ ناکام',
        description: 'تبصرہ شائع کرنے میں خرابی۔ براہ کرم دوبارہ کوشش کریں۔',
        variant: 'destructive',
      });
    } finally {
      setIsAddingComment(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{problem.title}</h3>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p className="mt-2">{problem.description}</p>
      <div className="flex justify-between mt-4">
        <button onClick={handleVote} disabled={isVoting} className="text-blue-500">
          {problem.has_voted ? 'Remove Vote' : 'Vote'}
        </button>
        <button onClick={() => setShowComments(!showComments)} className="text-blue-500">
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
      {showComments && (
        <div className="mt-2">
          <form onSubmit={handleAddComment} className="flex">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="border rounded-l-md p-2 flex-grow"
            />
            <button type="submit" disabled={isAddingComment} className="bg-blue-500 text-white rounded-r-md p-2">
              {isAddingComment ? 'Adding...' : 'Add'}
            </button>
          </form>
          <div className="mt-2">
            {problem.comments && problem.comments.map((comment) => (
              <div key={comment.id} className="border-b py-2">
                <p className="text-sm">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemCard;
