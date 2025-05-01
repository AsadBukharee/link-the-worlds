
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Problem } from "@/types/api";
import { problemService } from "@/services/problemService";
import ProblemCard from "@/components/ProblemCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { 
    data: problems = [], 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['problems'],
    queryFn: problemService.getAllProblems
  });
  
  // Filter problems based on search term
  const filteredProblems = searchTerm
    ? problems.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : problems;

  const handleProblemUpdate = (updatedProblem: Problem) => {
    // This is handled by React Query's cache now
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
