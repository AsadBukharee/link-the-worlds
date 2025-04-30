
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { problemService } from "@/services/problemService";
import ProblemCard from "@/components/ProblemCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Problem, ProblemCreateRequest } from "@/types/api";

const Problems = () => {
  const { toast } = useToast();
  const [newProblem, setNewProblem] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: problems, isLoading, error, refetch } = useQuery({
    queryKey: ['problems'],
    queryFn: problemService.getAllProblems
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProblem.title.trim() || !newProblem.description.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      await problemService.createProblem({
        title: newProblem.title,
        description: newProblem.description,
        image_url: newProblem.imageUrl || undefined,
      });

      toast({
        title: "Success",
        description: "Problem reported successfully",
      });

      setNewProblem({ title: "", description: "", imageUrl: "" });
      setDialogOpen(false);
      refetch();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit problem. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleProblemUpdate = (updatedProblem: Problem) => {
    // Handle problem updates if needed
    refetch();
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8 font-urdu">...لوڈ ہو رہا ہے</div>;
  }

  if (error) {
    console.error("Error fetching problems:", error);
    return <div className="container mx-auto px-4 py-8 font-urdu">مسائل لوڈ کرنے میں مسئلہ آ گیا</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-urdu">کمیونٹی مسائل</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90 font-urdu">
              نیا مسئلہ رپورٹ کریں
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="font-urdu text-right">نیا مسئلہ رپورٹ کریں</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title" className="font-urdu text-right block">عنوان</Label>
                <Input
                  id="title"
                  value={newProblem.title}
                  onChange={(e) => setNewProblem({...newProblem, title: e.target.value})}
                  placeholder="مسئلہ کا عنوان درج کریں"
                  className="w-full mt-1 text-right font-urdu"
                />
              </div>
              <div>
                <Label htmlFor="description" className="font-urdu text-right block">تفصیل</Label>
                <Textarea
                  id="description"
                  value={newProblem.description}
                  onChange={(e) => setNewProblem({...newProblem, description: e.target.value})}
                  placeholder="مسئلہ کی تفصیل درج کریں"
                  className="w-full mt-1 text-right font-urdu"
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="imageUrl" className="font-urdu text-right block">تصویر کا URL (اختیاری)</Label>
                <Input
                  id="imageUrl"
                  value={newProblem.imageUrl}
                  onChange={(e) => setNewProblem({...newProblem, imageUrl: e.target.value})}
                  placeholder="تصویر کا URL درج کریں"
                  className="w-full mt-1 text-right font-urdu"
                />
              </div>
              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="font-urdu">منسوخ کریں</Button>
                <Button type="submit" className="bg-gradient-primary hover:opacity-90 font-urdu">جمع کریں</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems && problems.length > 0 ? (
          problems.map(problem => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              onUpdate={handleProblemUpdate}
            />
          ))
        ) : (
          <p className="text-center text-muted-foreground col-span-3 font-urdu">کوئی مسائل نہیں ملے</p>
        )}
      </div>
    </div>
  );
};

export default Problems;
