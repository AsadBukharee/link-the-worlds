import React, { useEffect, useState } from "react";
import { getRecentPosts } from "@/services/postService";
import { Post as UiPost } from "@/types/post";
import { convertToUiPost } from "@/utils/dataConversion";

const Home = () => {
  const [recentPosts, setRecentPosts] = useState<UiPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const posts = await getRecentPosts();
        const uiPosts = posts.map(post => convertToUiPost(post));
        setRecentPosts(uiPosts);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div>
      {/* Home page content will go here */}
      <h1>Welcome to Chak 64</h1>
      {loading ? (
        <p>Loading recent posts...</p>
      ) : (
        <div>
          <h2>Recent Posts</h2>
          {recentPosts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
