import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";

// Mock data for campaigns
const campaignData = [
  {
    id: "C64-1001",
    title: "School Renovation Project",
    description: "Help us renovate the primary school building to provide better facilities for our children.",
    targetAmount: 500000,
    collectedAmount: 275000,
    startDate: "2025-01-15",
    endDate: "2025-04-30",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
    donors: [
      { name: "Ahmed Khan", amount: 50000, isAnonymous: false },
      { name: "Anonymous", amount: 25000, isAnonymous: true },
      { name: "Fatima Bibi", amount: 100000, isAnonymous: false },
      { name: "Anonymous", amount: 100000, isAnonymous: true },
    ]
  },
  {
    id: "C64-1002",
    title: "Healthcare Center Equipment",
    description: "We need to purchase essential medical equipment for our village healthcare center.",
    targetAmount: 750000,
    collectedAmount: 450000,
    startDate: "2025-02-01",
    endDate: "2025-05-15",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
    donors: [
      { name: "Mohammad Ali", amount: 150000, isAnonymous: false },
      { name: "Anonymous", amount: 100000, isAnonymous: true },
      { name: "Zainab Ahmed", amount: 200000, isAnonymous: false },
    ]
  },
  {
    id: "C64-1003",
    title: "Community Water Project",
    description: "Help us improve the village water supply system for clean drinking water.",
    targetAmount: 1000000,
    collectedAmount: 350000,
    startDate: "2025-03-01",
    endDate: "2025-06-30",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
    donors: [
      { name: "Imran Shah", amount: 200000, isAnonymous: false },
      { name: "Anonymous", amount: 50000, isAnonymous: true },
      { name: "Saima Nawaz", amount: 100000, isAnonymous: false },
    ]
  },
  {
    id: "C64-1004",
    title: "Village Sports Ground",
    description: "Let's build a proper sports facility for our youth to promote healthy activities.",
    targetAmount: 600000,
    collectedAmount: 120000,
    startDate: "2025-02-15",
    endDate: "2025-07-15",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    donors: [
      { name: "Hassan Raza", amount: 50000, isAnonymous: false },
      { name: "Anonymous", amount: 70000, isAnonymous: true },
    ]
  },
];

const Campaigns = () => {
  const [campaigns] = useState(campaignData);

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to calculate progress percentage
  const calculateProgress = (collected: number, target: number) => {
    return Math.min(Math.round((collected / target) * 100), 100);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Ongoing Campaigns</h1>
        <p className="text-muted-foreground">Support our community development initiatives</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={campaign.image} 
                alt={campaign.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{campaign.title}</CardTitle>
                  <CardDescription>Campaign ID: {campaign.id}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground flex items-center justify-end gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(campaign.startDate)}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    to {formatDate(campaign.endDate)}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p>{campaign.description}</p>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Progress</span>
                  <span>{calculateProgress(campaign.collectedAmount, campaign.targetAmount)}%</span>
                </div>
                <Progress value={calculateProgress(campaign.collectedAmount, campaign.targetAmount)} />
                <div className="flex justify-between mt-1">
                  <span className="text-sm">Collected: PKR {campaign.collectedAmount.toLocaleString()}</span>
                  <span className="text-sm">Target: PKR {campaign.targetAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Recent Donors:</h4>
                <ul className="text-sm space-y-1">
                  {campaign.donors.slice(0, 3).map((donor, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{donor.name}</span>
                      <span>PKR {donor.amount.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-4">
              <Button asChild className="flex-1">
                <Link to={`/campaigns/${campaign.id}`}>View Campaign</Link>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <Link to={`/donate?campaign=${campaign.id}`}>Donate Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
