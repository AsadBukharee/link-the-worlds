import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { getPostsByDateRange } from "@/services/mockPostService";
import NewsCard from "@/components/NewsCard";
import { ThreeDCarousel } from "@/components/ui/3d-carousel";
import { newsCarouselData } from "@/data/carouselData";

const News = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 3);
        
        const recentPosts = await getPostsByDateRange(startDate, endDate);
        setPosts(recentPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero section with 3D carousel */}
      <section className="mb-12 pt-8 pb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center font-urdu">تازہ ترین خبریں</h1>
          <div className="max-w-5xl mx-auto">
            <ThreeDCarousel cards={newsCarouselData} />
          </div>
        </div>
      </section>
      
      {/* News grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 font-urdu">تمام خبریں</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
