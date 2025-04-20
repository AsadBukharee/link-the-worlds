
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Lottie from "lottie-react";
import registrationAnimation from "../assets/animations/registration.json";
import donateAnimation from "../assets/animations/donate.json";
import sponsorAnimation from "../assets/animations/sponsor.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Carousel Section - Full Width */}
      <section className="mb-10 w-full">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Community" 
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
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Technology" 
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Education" 
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
            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
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

            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
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

            <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
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
            <Card className="shadow-dual-color h-full border-none bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
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

      {/* Additional Features Section */}
      <section className="container mx-auto px-4 py-10 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-primary text-transparent bg-clip-text font-urdu">اضافی خصوصیات</h2>
          <p className="text-muted-foreground font-urdu">ہمارے گاؤں کے لیے اور بھی بہت کچھ دریافت کریں</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-urdu text-right">مشہور شخصیات</h3>
              <p className="font-urdu text-right">ہمارے گاؤں کی میراث میں حصہ ڈالنے والے نمایاں افراد کے بارے میں جانیں۔</p>
            </CardContent>
          </Card>

          <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-urdu text-right">گاؤں کا فخر</h3>
              <p className="font-urdu text-right">ہمارے شہداء اور ان شخصیات کے بارے میں جانیں جنہوں نے ہمارے گاؤں کو عزت دلائی ہے۔</p>
            </CardContent>
          </Card>

          <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-urdu text-right">زراعتی اہمیت</h3>
              <p className="font-urdu text-right">ہماری اہم فصلوں جیسے گندم، کپاس، سرسوں، مالٹے وغیرہ کے بارے میں جانیں۔</p>
            </CardContent>
          </Card>

          <Card className="shadow-dual-color hover:shadow-dual-hover transition-all duration-300 border-none hover:-translate-y-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-urdu text-right">مقامی کاروبار</h3>
              <p className="font-urdu text-right">ان مقامی کاروباروں کی حمایت کریں جو ہمارے گاؤں کی معیشت میں حصہ ڈالتے ہیں۔</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="font-urdu">
            <Link to="/about">ہمارے بارے میں مزید جانیں</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
