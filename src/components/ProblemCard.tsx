
import { useState } from "react";
import { Problem } from "@/types/problem";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { formatDistance } from "date-fns";
import { ThumbsUp, MessageSquare } from "lucide-react";
import { voteForProblem, addCommentToProblem } from "@/services/problemService";

interface ProblemCardProps {
  problem: Problem;
  onProblemUpdate: (updatedProblem: Problem) => void;
}

const ProblemCard = ({ problem, onProblemUpdate }: ProblemCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isVoting, setIsVoting] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  const timeAgo = formatDistance(new Date(problem.date), new Date(), { addSuffix: true });

  const handleVote = async () => {
    if (isVoting || problem.hasVoted) return;
    
    setIsVoting(true);
    try {
      // Simulate a check if the user is a resident
      const isResident = Math.random() > 0.3; // 70% chance to be a resident for demo
      
      if (!isResident) {
        toast({
          title: "ووٹ دینے کی اجازت نہیں",
          description: "صرف گاؤں کے رہائشی ووٹ دے سکتے ہیں",
          variant: "destructive"
        });
        setIsVoting(false);
        return;
      }
      
      const updatedProblem = await voteForProblem(problem.id, true);
      if (updatedProblem) {
        onProblemUpdate(updatedProblem);
        toast({
          title: "ووٹ کامیاب",
          description: "آپ کا ووٹ کامیابی سے شامل کر لیا گیا ہے",
        });
      }
    } catch (error) {
      toast({
        title: "خطا",
        description: error instanceof Error ? error.message : "ووٹ دینے میں خطا",
        variant: "destructive"
      });
    } finally {
      setIsVoting(false);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || !commentAuthor.trim() || isCommenting) return;
    
    setIsCommenting(true);
    try {
      const updatedProblem = await addCommentToProblem(problem.id, {
        author: commentAuthor,
        text: newComment
      });
      
      if (updatedProblem) {
        onProblemUpdate(updatedProblem);
        setNewComment("");
        setCommentAuthor("");
        toast({
          title: "تبصرہ شامل ہو گیا",
          description: "آپ کا تبصرہ کامیابی سے شامل کر لیا گیا ہے",
        });
      }
    } catch (error) {
      toast({
        title: "خطا",
        description: "تبصرہ شامل کرنے میں خطا",
        variant: "destructive"
      });
    } finally {
      setIsCommenting(false);
    }
  };

  return (
    <Card className="mb-6 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 font-urdu">
      {problem.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={problem.imageUrl}
            alt={problem.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{problem.title}</CardTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>پوسٹ کردہ {timeAgo}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">از: {problem.author}</p>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="mb-4">{problem.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant={problem.hasVoted ? "secondary" : "outline"}
              size="sm"
              className="flex items-center gap-1"
              onClick={handleVote}
              disabled={isVoting || problem.hasVoted}
            >
              <ThumbsUp size={16} />
              <span>{problem.votes}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageSquare size={16} />
              <span>{problem.comments.length}</span>
            </Button>
          </div>
        </div>
        
        {showComments && (
          <div className="mt-4 space-y-4">
            <h4 className="font-medium text-sm">تبصرے:</h4>
            
            {problem.comments.length > 0 ? (
              <div className="space-y-3">
                {problem.comments.map(comment => (
                  <div key={comment.id} className="bg-muted/30 p-3 rounded-md">
                    <div className="flex justify-between">
                      <p className="font-medium text-sm">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistance(new Date(comment.date), new Date(), { addSuffix: true })}
                      </p>
                    </div>
                    <p className="mt-1 text-sm">{comment.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">ابھی تک کوئی تبصرہ نہیں ہے</p>
            )}
            
            <div className="pt-2">
              <h4 className="font-medium text-sm mb-2">نیا تبصرہ شامل کریں:</h4>
              <Input
                placeholder="آپ کا نام"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="mb-2"
              />
              <Textarea
                placeholder="آپ کا تبصرہ یہاں لکھیں..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="resize-none mb-2"
                rows={3}
              />
              <Button 
                onClick={handleAddComment} 
                size="sm"
                disabled={!newComment.trim() || !commentAuthor.trim() || isCommenting}
              >
                تبصرہ بھیجیں
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
