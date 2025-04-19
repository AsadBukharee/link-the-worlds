
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { getPostsByDateRange } from "@/services/postService";
import NewsCard from "@/components/NewsCard";

const News = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - 3);
      
      const recentPosts = await getPostsByDateRange(startDate, endDate);
      setPosts(recentPosts);
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
