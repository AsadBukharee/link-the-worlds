
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { postService } from "@/services/postService";
import { Post } from "@/types/post";
import NewsCard from "@/components/NewsCard";
import Lottie from "lottie-react";
import registrationAnimation from "../assets/animations/registration.json";
import donateAnimation from "../assets/animations/donate.json";
import sponsorAnimation from "../assets/animations/sponsor.json";

const Home = () => {
  const [recentNews, setRecentNews] = useState<Post[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const posts = await postService.getRecentPosts();
        setRecentNews(posts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        setRecentNews([]);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-muted/30 relative">
      {/* Video Background with Overlay */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute min-w-full min-h-full object-cover top-0 left-0 w-full h-full"
        >
          <source src="https://v1.pinimg.com/videos/mc/720p/ba/7f/3f/ba7f3fef36056bdd781f79bd5d2c2cd7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content over the video background */}
      <div className="relative z-10">
        {/* Hero Carousel Section */}
        <section className="mb-10 w-full">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/f2/1b/5a/f21b5a673c08176ce955f61ab1b962bd.jpg" 
                    alt="Village Image 1" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">ہمارا64</h1>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">آئیے اپنے گاؤں کو جنت بنائیں</p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                          <Link to="/register" className="font-urdu">رجسٹر کریں</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                          <Link to="/donate" className="font-urdu">عطیہ دیں</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/02/97/08/029708f69b207abce677c54ba19e48b9.jpg" 
                    alt="Village Image 2" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">ایک ساتھ تعمیر کریں</h2>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">بہتر مستقبل بنانے میں ہمارے ساتھ شامل ہوں</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/43/76/e4/4376e4508b4022a804bd4c92a1dcb74b.jpg" 
                    alt="Village Image 3" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">تعلیم کو بااختیار بنانا</h2>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">ہماری آنے والی نسلوں کو سہارا دیں</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/ed/67/3f/ed673fefd644bdfc9ef3d3d8a9c0b5ea.jpg" 
                    alt="Village Image 4" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">روایات اور ثقافت</h2>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">ہماری روایات کو زندہ رکھنے میں مدد کریں</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/8c/f5/12/8cf512bfe0560b9fa2ce7416da226085.jpg" 
                    alt="Village Image 5" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">ترقی کی راہ</h2>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">ہماری کمیونٹی کی ترقی میں حصہ ڈالیں</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/8e/51/6d/8e516da1233cfa12ac1ba0e8f091fa78.jpg" 
                    alt="Village Image 6" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">زراعت کی اہمیت</h2>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">ہماری فصلوں کی کامیابی میں حصہ لیں</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/7a/25/d7/7a25d74c354198350ba0ced8b8861d58.jpg" 
                    alt="Village Image 7" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 font-urdu">مستقبل کی تعمیر</h2>
                      <p className="text-xl md:text-2xl mb-8 font-urdu">آنے والی نسلوں کے لیے بہتر دنیا بنائیں</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Features Grid with Left 20% blank and Right 20% promo card */}
        <section className="container mx-auto px-4 mb-20">
          <div className="flex flex-col md:flex-row">
            {/* Left 20% blank space */}
            <div className="w-full md:w-1/5"></div>
            
            {/* Middle 60% with feature cards */}
            <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
                <CardContent className="p-6">
                  <div className="mb-4 h-40 overflow-hidden">
                    <Lottie animationData={registrationAnimation} loop={true} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-urdu text-right">خود کو رجسٹر کریں</h3>
                  <p className="mb-4 font-urdu text-right">اپنے فون نمبر اور CNIC کے ساتھ ہماری گاؤں کمیونٹی میں شامل ہوں۔</p>
                  <Button asChild variant="secondary" className="w-full bg-gradient-secondary hover:opacity-90">
                    <Link to="/register" className="font-urdu">ابھی رجسٹر کریں</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
                <CardContent className="p-6">
                  <div className="mb-4 h-40 overflow-hidden">
                    <Lottie animationData={donateAnimation} loop={true} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-urdu text-right">عطیہ دیں</h3>
                  <p className="mb-4 font-urdu text-right">زکوٰۃ، شادی کی مدد، طبی علاج، تعمیر اور دیگر مقاصد کے لیے عطیہ دیں۔</p>
                  <Button asChild variant="secondary" className="w-full bg-gradient-secondary hover:opacity-90">
                    <Link to="/donate" className="font-urdu">عطیہ دیں</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
                <CardContent className="p-6">
                  <div className="mb-4 h-40 overflow-hidden">
                    <Lottie animationData={sponsorAnimation} loop={true} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-urdu text-right">فنڈ اسپانسر کریں</h3>
                  <p className="mb-4 font-urdu text-right">امام مسجد یا تعلیمی فنڈ جیسے مخصوص فنڈز کو سپانسر کریں۔</p>
                  <Button asChild variant="secondary" className="w-full bg-gradient-secondary hover:opacity-90">
                    <Link to="/sponsor" className="font-urdu">اسپانسر کریں</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Right 20% with promo card */}
            <div className="w-full md:w-1/5 px-4 mt-6 md:mt-0">
              <Card className="shadow-dual-color h-full border-none bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden bg-white/80">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="mb-4 overflow-hidden rounded-md">
                    <img 
                      src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80" 
                      alt="Promotion" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-urdu text-right">مہمات میں شامل ہوں</h3>
                  <p className="mb-4 font-urdu text-right text-sm">ہماری تازہ ترین مہمات دیکھیں اور ہماری کمیونٹی کی ترقی میں حصہ ڈالیں۔</p>
                  <Button asChild variant="outline" className="mt-auto w-full font-urdu">
                    <Link to="/campaigns">مہمات دیکھیں</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News Feed Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-primary text-transparent bg-clip-text font-urdu">تازہ ترین خبریں</h2>
            <p className="text-muted-foreground font-urdu text-white">ہمارے گاؤں کی خبروں سے آگاہ رہیں</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentNews.map(post => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="font-urdu bg-white/20 text-white hover:bg-white/30">
              <Link to="/news">تمام خبریں دیکھیں</Link>
            </Button>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-primary text-transparent bg-clip-text font-urdu">فلاحی گاؤں کے بارے میں</h2>
            <p className="text-muted-foreground font-urdu text-white">ہمارے خوبصورت گاؤں کے بارے میں مزید جانیں</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-urdu text-right">مشہور شخصیات</h3>
                <p className="font-urdu text-right">ہمارے گاؤں کی میراث میں حصہ ڈالنے والے نمایاں افراد کے بارے میں جانیں۔</p>
              </CardContent>
            </Card>

            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-urdu text-right">گاؤں کا فخر</h3>
                <p className="font-urdu text-right">ہمارے شہداء اور ان شخصیات کے بارے میں جانیں جنہوں نے ہمارے گاؤں کو عزت دلائی ہے۔</p>
              </CardContent>
            </Card>

            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-urdu text-right">زراعتی اہمیت</h3>
                <p className="font-urdu text-right">ہماری اہم فصلوں جیسے گندم، کپاس، سرسوں، مالٹے وغیرہ کے بارے میں جانیں۔</p>
              </CardContent>
            </Card>

            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2 bg-white/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-urdu text-right">مقامی کاروبار</h3>
                <p className="font-urdu text-right">ان مقامی کاروباروں کی حمایت کریں جو ہمارے گاؤں کی معیشت میں حصہ ڈالتے ہیں۔</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="font-urdu bg-white/20 text-white hover:bg-white/30">
              <Link to="/about">ہمارے بارے میں مزید جانیں</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
