
import React, { useEffect, useState } from 'react';
import { BlogPost } from '@/types/api';
import { apiClient } from '@/services/apiClient';
import { API_ENDPOINTS } from '@/config/api';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await apiClient.get<{results: BlogPost[]}>(API_ENDPOINTS.BLOGS);
        setBlogPosts(response.results || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="p-8 text-center">Loading blog posts...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Chak 64 Blog</h1>
      
      {blogPosts.length === 0 ? (
        <div className="text-center text-gray-600">No blog posts available yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.image_url && (
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {formatDate(post.created_at)}
                  {post.author && ` • By ${post.author.full_name || post.author.phone || 'Unknown'}`}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
                <button className="text-primary-600 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
