
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types/api";
import { postService } from "@/services/postService";
import NewsCard from "@/components/NewsCard";

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: postService.getRecentPosts
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8 font-urdu">...لوڈ ہو رہا ہے</div>;
  }

  if (error) {
    console.error("Error fetching posts:", error);
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
