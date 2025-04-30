
import { useEffect, useState } from "react";
import { Post as ApiPost } from "@/types/api";
import { Post as UiPost } from "@/types/post";
import { getPostsByDateRange } from "@/services/postService";
import NewsCard from "@/components/NewsCard";

const News = () => {
  const [posts, setPosts] = useState<UiPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Convert API Post type to UI Post type
  const convertToUiPost = (apiPost: ApiPost): UiPost => {
    return {
      id: apiPost.id,
      title: apiPost.title,
      content: apiPost.content,
      author: apiPost.author || "Unknown",
      date: apiPost.created_at || new Date().toISOString(),
      imageUrl: apiPost.image_url
    };
  };

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - 3);
      
      // Format dates as strings for the API
      const startDateStr = startDate.toISOString().split('T')[0];
      const endDateStr = endDate.toISOString().split('T')[0];
      
      const recentPosts = await getPostsByDateRange(startDateStr, endDateStr);
      setPosts(recentPosts.map(post => convertToUiPost(post)));
      setLoading(false);
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default News;
