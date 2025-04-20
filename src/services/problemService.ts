
import { Problem } from "@/types/problem";

// Mock data for problems
const problemsData: Problem[] = [
  {
    id: "P64-1001",
    title: "پینے کے پانی کی کمی",
    description: "ہمارے گاؤں میں پینے کے پانی کی کمی ہے۔ ہم چاہتے ہیں کہ حکومت ہمارے علاقے میں نئے نلکے لگائے۔",
    author: "عبدالرحمان",
    date: "2025-04-15T10:30:00",
    votes: 45,
    comments: [
      {
        id: "C1",
        author: "سلیم",
        text: "ہاں، یہ ایک بہت بڑا مسئلہ ہے۔ میں اس پر ووٹ کرتا ہوں۔",
        date: "2025-04-15T14:45:00"
      },
      {
        id: "C2",
        author: "عائشہ",
        text: "میں نے اس مسئلے کے بارے میں حکومتی افسران سے بات کی ہے۔",
        date: "2025-04-16T09:20:00"
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1529638299331-efdbcf6ba8a6?auto=format&fit=crop&q=80"
  },
  {
    id: "P64-1002",
    title: "روڈ کی خراب حالت",
    description: "ہمارے گاؤں کی مرکزی سڑک بہت خراب ہے۔ برسات میں یہاں پانی جمع ہو جاتا ہے اور آمدورفت مشکل ہو جاتی ہے۔",
    author: "محمد علی",
    date: "2025-04-13T15:20:00",
    votes: 38,
    comments: [
      {
        id: "C3",
        author: "نعیم",
        text: "ہمیں اس مسئلے کو حل کرنے کے لیے کوئی فنڈ اکٹھا کرنا چاہیے۔",
        date: "2025-04-14T11:30:00"
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520095972714-909e91b038e5?auto=format&fit=crop&q=80"
  },
  {
    id: "P64-1003",
    title: "بجلی کی لوڈ شیڈنگ",
    description: "ہمارے علاقے میں بجلی کی لوڈ شیڈنگ بہت زیادہ ہے۔ گرمیوں میں 10-12 گھنٹے بجلی نہیں ہوتی۔",
    author: "فاطمہ",
    date: "2025-04-10T18:15:00",
    votes: 52,
    comments: [
      {
        id: "C4",
        author: "حسن",
        text: "یہ ایک سنجیدہ مسئلہ ہے۔ ہمیں وزیر برائے توانائی کو خط لکھنا چاہیے۔",
        date: "2025-04-11T09:45:00"
      },
      {
        id: "C5",
        author: "زینب",
        text: "میں نے ایک درخواست لکھی ہے اور 50 لوگوں کے دستخط جمع کیے ہیں۔",
        date: "2025-04-12T14:20:00"
      },
      {
        id: "C6",
        author: "عمران",
        text: "سولر انرجی ایک اچھا متبادل ہو سکتا ہے۔",
        date: "2025-04-13T16:10:00"
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
  }
];

// Get all problems sorted by votes
export const getAllProblems = (): Promise<Problem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...problemsData].sort((a, b) => b.votes - a.votes));
    }, 500);
  });
};

// Get a problem by id
export const getProblemById = (id: string): Promise<Problem | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const problem = problemsData.find(p => p.id === id);
      resolve(problem);
    }, 300);
  });
};

// Vote for a problem
export const voteForProblem = (id: string, isResident: boolean): Promise<Problem | undefined> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isResident) {
        reject(new Error("صرف گاؤں کے رہائشی ووٹ دے سکتے ہیں"));
        return;
      }

      const problemIndex = problemsData.findIndex(p => p.id === id);
      if (problemIndex !== -1) {
        const updatedProblem = {
          ...problemsData[problemIndex],
          votes: problemsData[problemIndex].votes + 1,
          hasVoted: true
        };
        problemsData[problemIndex] = updatedProblem;
        resolve(updatedProblem);
      } else {
        resolve(undefined);
      }
    }, 300);
  });
};

// Add a comment to a problem
export const addCommentToProblem = (
  problemId: string, 
  comment: { author: string; text: string }
): Promise<Problem | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const problemIndex = problemsData.findIndex(p => p.id === problemId);
      if (problemIndex !== -1) {
        const newComment = {
          id: `C${Date.now()}`,
          author: comment.author,
          text: comment.text,
          date: new Date().toISOString()
        };
        
        const updatedProblem = {
          ...problemsData[problemIndex],
          comments: [...problemsData[problemIndex].comments, newComment]
        };
        
        problemsData[problemIndex] = updatedProblem;
        resolve(updatedProblem);
      } else {
        resolve(undefined);
      }
    }, 400);
  });
};
