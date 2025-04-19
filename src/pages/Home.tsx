
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Leaf, Building, Banknote } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Flahi Gaon</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Let's Make Our Village a Paradise</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/register">Register Yourself</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
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

        <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
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
