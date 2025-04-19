
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { getRecentPosts } from "@/services/postService";
import NewsCard from "@/components/NewsCard";

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getRecentPosts();
      setPosts(allPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
