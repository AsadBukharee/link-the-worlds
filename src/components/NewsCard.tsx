
import { Post } from "@/types/post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistance } from "date-fns";

interface NewsCardProps {
  post: Post;
}

const NewsCard = ({ post }: NewsCardProps) => {
  const timeAgo = formatDistance(new Date(post.date), new Date(), { addSuffix: true });

  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      {post.imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">By {post.author} • {timeAgo}</p>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{post.content}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
