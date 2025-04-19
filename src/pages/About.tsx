
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Flag, Leaf, Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the About page sections
const personalities = [
  {
    id: 1,
    name: "Dr. Abdul Malik",
    role: "Renowned Doctor",
    description: "Dr. Abdul Malik is a globally recognized cardiologist who has contributed to various medical research papers and helped establish the village's first medical center."
  },
  {
    id: 2,
    name: "Prof. Saima Haider",
    role: "Educator",
    description: "Professor Saima has dedicated 30 years to education, establishing the first girls' high school in the region and advocating for women's education."
  },
  {
    id: 3,
    name: "Haji Muhammad Ibrahim",
    role: "Community Leader",
    description: "As a respected elder, Haji Ibrahim has led numerous community development initiatives and served as a mediator in resolving local disputes."
  },
  {
    id: 4,
    name: "Farida Bibi",
    role: "Artisan",
    description: "Farida Bibi has preserved traditional embroidery techniques and created employment opportunities for women through her crafts cooperative."
  }
];

const martyrs = [
  {
    id: 1,
    name: "Captain Asad Ali Khan",
    service: "Pakistan Army",
    year: "2010",
    description: "Captain Asad sacrificed his life during a counter-terrorism operation, displaying exceptional bravery in the face of danger."
  },
  {
    id: 2,
    name: "Sub-Inspector Amir Hussain",
    service: "Police Force",
    year: "2015",
    description: "Sub-Inspector Amir lost his life while protecting civilians during an armed robbery, demonstrating remarkable courage and commitment to duty."
  },
  {
    id: 3,
    name: "Lieutenant Zara Batool",
    service: "Pakistan Air Force",
    year: "2018",
    description: "Lt. Zara perished during a training mission, leaving behind a legacy of breaking barriers for women in the armed forces."
  }
];

const agriculture = [
  {
    id: 1,
    name: "Wheat",
    season: "Rabi",
    details: "The staple crop of our village, grown using both traditional and modern farming techniques with two cycles per year."
  },
  {
    id: 2,
    name: "Cotton",
    season: "Kharif",
    details: "Known for its high quality, our cotton is exported to textile manufacturers across the country."
  },
  {
    id: 3,
    name: "Mustard",
    season: "Rabi",
    details: "Used for oil production, our mustard crop is known for its high yield and quality."
  },
  {
    id: 4,
    name: "Oranges",
    season: "Winter",
    details: "Our kinnow oranges are famous throughout the region for their sweetness and juiciness."
  },
  {
    id: 5,
    name: "Guava",
    season: "Summer",
    details: "A specialty of our region, our guavas are prized for their size and flavor."
  },
  {
    id: 6,
    name: "Bari (Vegetable)",
    season: "Year-round",
    details: "Various vegetables are grown in small plots throughout the village, supporting local food security."
  }
];

const businesses = [
  {
    id: 1,
    name: "Khan Textile Mills",
    type: "Manufacturing",
    description: "A family-owned textile business that processes locally grown cotton and provides employment to over 50 villagers."
  },
  {
    id: 2,
    name: "Al-Barakat Dairy Farm",
    type: "Agriculture",
    description: "Produces milk, yogurt, and other dairy products using modern farming techniques with a herd of over 100 cattle."
  },
  {
    id: 3,
    name: "Hussain Brothers Transport",
    type: "Services",
    description: "Provides transportation services for agricultural produce and connects the village to major cities."
  },
  {
    id: 4,
    name: "Noor Medical Store",
    type: "Retail",
    description: "The first pharmacy in the village, serving the community for over 25 years with essential medicines."
  }
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">About Flahi Gaon</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Discover the rich heritage, notable personalities, and economic backbone of our beautiful village.</p>
      </div>
      
      <Tabs defaultValue="personalities" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="personalities" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Famous Personalities</span>
            <span className="inline md:hidden">People</span>
          </TabsTrigger>
          <TabsTrigger value="martyrs" className="flex items-center gap-2">
            <Flag className="h-4 w-4" />
            <span className="hidden md:inline">Pride of Flahi</span>
            <span className="inline md:hidden">Pride</span>
          </TabsTrigger>
          <TabsTrigger value="agriculture" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span className="hidden md:inline">Agricultural Highlights</span>
            <span className="inline md:hidden">Agriculture</span>
          </TabsTrigger>
          <TabsTrigger value="businesses" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span className="hidden md:inline">Local Businesses</span>
            <span className="inline md:hidden">Business</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personalities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalities.map((person) => (
              <Card key={person.id}>
                <CardHeader>
                  <CardTitle>{person.name}</CardTitle>
                  <CardDescription>{person.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{person.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="martyrs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {martyrs.map((martyr) => (
              <Card key={martyr.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{martyr.name}</CardTitle>
                  <CardDescription>
                    {martyr.service} • {martyr.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{martyr.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="agriculture">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agriculture.map((crop) => (
              <Card key={crop.id}>
                <CardHeader>
                  <CardTitle>{crop.name}</CardTitle>
                  <CardDescription>Season: {crop.season}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{crop.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="businesses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businesses.map((business) => (
              <Card key={business.id}>
                <CardHeader>
                  <CardTitle>{business.name}</CardTitle>
                  <CardDescription>{business.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{business.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 mb-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Village History</h2>
      </div>
      
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto dark:prose-invert">
        <p>Flahi Gaon, established over 150 years ago, has a rich history that reflects the resilience and community spirit of its residents. Originally founded by farming families seeking fertile land along the river, the village has grown into a thriving community while preserving its agricultural roots.</p>
        
        <p>Throughout its history, Flahi Gaon has weathered numerous challenges, from natural disasters to economic hardships. During the floods of 1988, the entire community came together to rebuild homes and infrastructure, demonstrating the strong bonds that continue to define our village identity.</p>
        
        <p>Education has always been valued in Flahi Gaon. The first school was established in 1965, and today our village boasts multiple educational institutions serving students from primary to higher secondary levels. Many of our youth now pursue university education in nearby cities, bringing back knowledge and innovation to their hometown.</p>
        
        <p>Traditional crafts and cultural practices remain an important part of village life, with seasonal festivals and ceremonies marking the agricultural calendar. The annual harvest festival continues to be the largest community gathering, celebrating the fruits of our collective labor.</p>
        
        <p>As we look to the future, Flahi Gaon embraces progress while honoring its heritage. Community development initiatives aim to improve infrastructure, enhance educational opportunities, and create sustainable economic growth for all residents.</p>
      </div>
    </div>
  );
};

export default About;
