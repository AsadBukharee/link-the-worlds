import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Leaf, Building, Banknote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getRecentPosts } from "@/services/postService";
import { Post } from "@/types/post";
import NewsCard from "@/components/NewsCard";

const Home = () => {
  const [recentNews, setRecentNews] = useState<Post[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const posts = await getRecentPosts();
      setRecentNews(posts.slice(0, 3));
    };
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Carousel Section */}
      <section className="mb-20">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Community" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                  <div className="text-white max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">ہمارا64</h1>
                    <p className="text-xl md:text-2xl mb-8">Let's Make Our Village a Paradise</p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link to="/register">Register Yourself</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                        <Link to="/donate">Donate Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Technology" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                  <div className="text-white max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Building Together</h2>
                    <p className="text-xl md:text-2xl mb-8">Join us in creating a better future</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Education" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                  <div className="text-white max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Education</h2>
                    <p className="text-xl md:text-2xl mb-8">Supporting our future generations</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <User className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Register Yourself</CardTitle>
            <CardDescription>Join our community network</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Register with your phone number and CNIC to join our village community.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/register">Register Now</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Banknote className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Donate</CardTitle>
            <CardDescription>Support our community initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Contribute to various causes including Zakat, marriage assistance, medical treatment, and construction.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/donate">Donate</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Building className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Sponsor Fund</CardTitle>
            <CardDescription>Support specific community funds</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Sponsor various funds like Imam Masjid or Educational Fund to support specific community needs.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/sponsor">Sponsor</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <Calendar className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Ongoing Campaigns</CardTitle>
            <CardDescription>See what's happening in our community</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Check out the various campaigns that are currently active in our community and how you can contribute to them.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/campaigns">View Campaigns</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* News Feed Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
          <p className="text-muted-foreground">Stay informed with our village news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentNews.map(post => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/news">See All News</Link>
          </Button>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">About Flahi Gaon</h2>
          <p className="text-muted-foreground">Learn more about our beautiful village</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Famous Personalities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover notable individuals who have contributed to our village's legacy.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Pride of the Village</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn about our martyrs and figures who have brought honor to Flahi Gaon.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Leaf className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Agricultural Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore our prominent crops like Wheat, Cotton, Mustard, Oranges, and more.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Local Businesses</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Support local businesses that contribute to our village economy.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
