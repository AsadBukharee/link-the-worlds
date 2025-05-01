
import { Post } from "@/types/post";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Village Clean-up Drive Success",
    content: "Our community came together for the annual village clean-up drive. Over 100 volunteers participated in making our village cleaner and greener.",
    author: "Admin",
    date: "2025-04-19",
    imageUrl: "https://images.unsplash.com/photo-1532954751162-5b35d427a3b6"
  },
  {
    id: "2",
    title: "New School Building Progress",
    content: "Construction of our new school building is progressing well. The foundation has been laid and we expect completion by year end.",
    author: "Project Manager",
    date: "2025-04-18",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
  },
  {
    id: "3",
    title: "Agricultural Workshop Announcement",
    content: "Join us for a workshop on modern farming techniques this weekend. Expert farmers will share their knowledge.",
    author: "Events Team",
    date: "2025-04-17",
    imageUrl: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6"
  }
];

export const getRecentPosts = () => {
  return Promise.resolve(mockPosts);
};

export const getPostsByDateRange = (startDate: Date, endDate: Date) => {
  const filteredPosts = mockPosts.filter(post => {
    const postDate = new Date(post.date);
    return postDate >= startDate && postDate <= endDate;
  });
  return Promise.resolve(filteredPosts);
};
