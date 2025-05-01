
import { Post } from "@/types/post";

// Mock data for posts
const mockPosts: Post[] = [
  {
    id: "1",
    title: "گاؤں میں نئی سکول بلڈنگ کا افتتاح",
    content: "آج ہمارے گاؤں میں نئی سکول بلڈنگ کا افتتاح کیا گیا۔ یہ تعلیمی ادارہ ہمارے بچوں کے مستقبل کی تعمیر میں اہم کردار ادا کرے گا۔",
    author: "احمد علی",
    date: "2023-05-15T10:30:00",
    imageUrl: "https://images.unsplash.com/photo-1610843834151-c688d6fd3e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "2",
    title: "کھیت میں نئی فصل کا آغاز",
    content: "موسم بہار کے آغاز کے ساتھ ہی کسانوں نے کھیتوں میں نئی فصل کی کاشت شروع کر دی ہے۔ اس سال اچھی پیداوار کی توقع ہے۔",
    author: "عائشہ محمود",
    date: "2023-05-10T14:45:00",
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "3",
    title: "صحت کی مہم کا آغاز",
    content: "گاؤں میں صحت کی آگاہی کی ایک نئی مہم کا آغاز کیا گیا ہے جس کے تحت لوگوں کو صحت کے بارے میں آگاہی دی جائے گی۔",
    author: "محمد یونس",
    date: "2023-05-05T09:15:00",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "4",
    title: "نئی سڑک کی تعمیر مکمل",
    content: "گاؤں کو شہر سے ملانے والی نئی سڑک کی تعمیر مکمل ہو گئی ہے۔ اس سے سفر کرنا آسان ہو گیا ہے اور وقت بھی بچ رہا ہے۔",
    author: "فاطمہ حسین",
    date: "2023-04-28T16:20:00",
    imageUrl: "https://images.unsplash.com/photo-1594818020845-4e0d5f773033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "5",
    title: "پانی کی فراہمی کا نیا منصوبہ",
    content: "گاؤں میں پانی کی قلت کو دور کرنے کے لیے ایک نیا منصوبہ شروع کیا گیا ہے جس سے لوگوں کو صاف پانی مل سکے گا۔",
    author: "عمر فاروق",
    date: "2023-04-22T11:10:00",
    imageUrl: "https://images.unsplash.com/photo-1543008072-3601d4232049?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Mock implementation of postService
export const mockPostService = {
  // Get all posts
  async getAllPosts(): Promise<Post[]> {
    return mockPosts;
  },

  // Get recent posts
  async getRecentPosts(): Promise<Post[]> {
    return mockPosts.slice(0, 3);
  },

  // Get post by ID
  async getPostById(postId: string): Promise<Post | undefined> {
    return mockPosts.find(post => post.id === postId);
  },

  // Get posts by date range
  async getPostsByDateRange(startDate: Date, endDate: Date): Promise<Post[]> {
    // Filter posts by date
    return mockPosts.filter(post => {
      const postDate = new Date(post.date);
      return postDate >= startDate && postDate <= endDate;
    });
  }
};

// Export individual functions to match real service interface
export const getAllPosts = mockPostService.getAllPosts;
export const getRecentPosts = mockPostService.getRecentPosts;
export const getPostById = mockPostService.getPostById;
export const getPostsByDateRange = mockPostService.getPostsByDateRange;
