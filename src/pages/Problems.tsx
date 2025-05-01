
import { useEffect, useState } from "react";
import { Problem } from "@/types/problem";
import { getAllProblems } from "@/services/problemService";
import ProblemCard from "@/components/ProblemCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Problems = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const allProblems = await getAllProblems();
        setProblems(allProblems);
        setFilteredProblems(allProblems);
      } catch (error) {
        console.error("Error fetching problems:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  const handleProblemUpdate = (updatedProblem: Problem) => {
    const updatedProblems = problems.map(p => 
      p.id === updatedProblem.id ? updatedProblem : p
    ).sort((a, b) => b.votes - a.votes);
    
    setProblems(updatedProblems);
    
    // Apply current filter to the updated problems
    if (searchTerm) {
      const filtered = updatedProblems.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProblems(filtered);
    } else {
      setFilteredProblems(updatedProblems);
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredProblems(problems);
      return;
    }
    
    const filtered = problems.filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProblems(filtered);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 font-urdu">
        <div className="text-center">لوڈ ہو رہا ہے...</div>
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
