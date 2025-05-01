
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Problem as ApiProblem } from "@/types/api";
import { Problem as LocalProblem } from "@/types/problem";
import { problemService } from "@/services/problemService";
import ProblemCard from "@/components/ProblemCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Adapter function to convert API Problem to Local Problem
const adaptApiProblemToLocalProblem = (apiProblem: ApiProblem): LocalProblem => {
  return {
    id: apiProblem.id.toString(),
    title: apiProblem.title,
    description: apiProblem.description,
    author: apiProblem.author?.username || "Unknown",
    date: apiProblem.created_at || new Date().toISOString(),
    votes: apiProblem.votes,
    comments: apiProblem.comments?.map(comment => ({
      id: comment.id.toString(),
      author: comment.author.username,
      text: comment.text,
      date: comment.created_at
    })) || [],
    imageUrl: apiProblem.image_url,
    hasVoted: apiProblem.has_voted
  };
};

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localProblems, setLocalProblems] = useState<LocalProblem[]>([]);
  
  const { 
    data: apiProblems = [], 
    isLoading, 
    error,
    isSuccess 
  } = useQuery({
    queryKey: ['problems'],
    queryFn: problemService.getAllProblems
  });
  
  // Use useEffect to handle the success case
  useEffect(() => {
    if (isSuccess && apiProblems) {
      // Convert API problems to local problem format
      const converted = apiProblems.map(adaptApiProblemToLocalProblem);
      setLocalProblems(converted);
    }
  }, [isSuccess, apiProblems]);
  
  // Filter problems based on search term
  const filteredProblems = searchTerm
    ? localProblems.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : localProblems;

  const handleProblemUpdate = (updatedProblem: LocalProblem) => {
    setLocalProblems(prev => 
      prev.map(p => p.id === updatedProblem.id ? updatedProblem : p)
    );
  };

  const handleSearch = () => {
    // Search is handled by the filteredProblems variable
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 font-urdu">
        <div className="text-center">لوڈ ہو رہا ہے...</div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching problems:", error);
    return (
      <div className="container mx-auto px-4 py-8 font-urdu">
        <div className="text-center">مسائل لوڈ کرنے میں مسئلہ آ گیا</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-urdu">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#8F62D5] to-[#7091E7]">
          گاؤں کے مسائل
        </h1>
        <p className="text-muted-foreground mb-6">
          اپنے گاؤں کے مسائل سے آگاہ کریں اور اُن کے حل میں اپنا کردار ادا کریں
        </p>
        
        <div className="max-w-md mx-auto flex gap-2 mb-8">
          <Input
            placeholder="مسئلے کو تلاش کریں..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="border-[#8F62D5]/30 focus-visible:ring-[#8F62D5]"
          />
          <Button onClick={handleSearch} className="bg-[#8F62D5] hover:bg-[#7E54C8]">
            <Search size={18} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.length > 0 ? (
          filteredProblems.map(problem => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              onProblemUpdate={handleProblemUpdate}
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-muted-foreground">کوئی مسئلہ نہیں ملا۔</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problems;
