
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import NewsCard from "@/components/NewsCard";
import { mockPostService } from "@/services/mockPostService";

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await mockPostService.getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err : new Error("Failed to fetch posts"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8 font-urdu">...لوڈ ہو رہا ہے</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 font-urdu">پوسٹس لوڈ کرنے میں مسئلہ آ گیا</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-urdu">بلاگ پوسٹس</h1>
      {posts && posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground font-urdu">کوئی پوسٹس نہیں ملی</p>
      )}
    </div>
  );
};

export default Blog;
