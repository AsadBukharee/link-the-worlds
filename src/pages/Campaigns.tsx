
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";

// Updated mock data with Urdu text
const campaignData = [
  {
    id: "C64-1001",
    title: "سکول کی تعمیر نو",
    description: "ہمارے بچوں کے لیے بہتر سہولیات فراہم کرنے کے لیے پرائمری سکول کی عمارت کی تجدید میں ہماری مدد کریں۔",
    targetAmount: 500000,
    collectedAmount: 275000,
    startDate: "2025-01-15",
    endDate: "2025-04-30",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
    donors: [
      { name: "احمد خان", amount: 50000, isAnonymous: false },
      { name: "گمنام", amount: 25000, isAnonymous: true },
      { name: "فاطمہ بی بی", amount: 100000, isAnonymous: false },
      { name: "گمنام", amount: 100000, isAnonymous: true },
    ]
  },
  {
    id: "C64-1002",
    title: "صحت مرکز کا سامان",
    description: "ہمیں اپنے گاؤں کے صحت مرکز کے لیے ضروری طبی سامان خریدنے کی ضرورت ہے۔",
    targetAmount: 750000,
    collectedAmount: 450000,
    startDate: "2025-02-01",
    endDate: "2025-05-15",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
    donors: [
      { name: "محمد علی", amount: 150000, isAnonymous: false },
      { name: "گمنام", amount: 100000, isAnonymous: true },
      { name: "زینب احمد", amount: 200000, isAnonymous: false },
    ]
  },
  {
    id: "C64-1003",
    title: "کمیونٹی واٹر پروجیکٹ",
    description: "صاف پانی پینے کے لیے گاؤں کے پانی کی فراہمی کے نظام کو بہتر بنانے میں ہماری مدد کریں۔",
    targetAmount: 1000000,
    collectedAmount: 350000,
    startDate: "2025-03-01",
    endDate: "2025-06-30",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
    donors: [
      { name: "عمران شاہ", amount: 200000, isAnonymous: false },
      { name: "گمنام", amount: 50000, isAnonymous: true },
      { name: "سائیمہ نواز", amount: 100000, isAnonymous: false },
    ]
  },
  {
    id: "C64-1004",
    title: "گاؤں کا اسپورٹس گراؤنڈ",
    description: "آئیے اپنی نوجوان نسل کے لیے صحت مند سرگرمیوں کو فروغ دینے کے لیے کھیلوں کی مناسب سہولت بنائیں۔",
    targetAmount: 600000,
    collectedAmount: 120000,
    startDate: "2025-02-15",
    endDate: "2025-07-15",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    donors: [
      { name: "حسن رضا", amount: 50000, isAnonymous: false },
      { name: "گمنام", amount: 70000, isAnonymous: true },
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
    <div className="container mx-auto px-4 py-10 font-urdu">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-primary text-transparent bg-clip-text">جاری مہمات</h1>
        <p className="text-muted-foreground">ہماری کمیونٹی کی ترقیاتی مہمات میں حصہ لیں</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {campaigns.map((campaign) => (
          <Card 
            key={campaign.id} 
            className="overflow-hidden transition-all duration-300 shadow-dual-color hover:shadow-dual-hover border-none"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={campaign.image} 
                alt={campaign.title} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{campaign.title}</CardTitle>
                  <CardDescription className="text-base">شناخت: {campaign.id}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground flex items-center justify-end gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(campaign.startDate)}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">{campaign.description}</p>
              
              <div className="bg-muted/20 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">پیش رفت</span>
                  <span>{calculateProgress(campaign.collectedAmount, campaign.targetAmount)}%</span>
                </div>
                <Progress 
                  value={calculateProgress(campaign.collectedAmount, campaign.targetAmount)}
                  className="h-2 bg-muted"
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>جمع شدہ: {campaign.collectedAmount.toLocaleString()} روپے</span>
                  <span>ہدف: {campaign.targetAmount.toLocaleString()} روپے</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">حالیہ عطیہ دہندگان:</h4>
                <ul className="space-y-2">
                  {campaign.donors.slice(0, 3).map((donor, index) => (
                    <li key={index} className="flex justify-between bg-muted/10 p-2 rounded">
                      <span>{donor.name}</span>
                      <span className="text-primary">{donor.amount.toLocaleString()} روپے</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-4">
              <Button asChild variant="secondary" className="flex-1 text-lg bg-gradient-secondary hover:opacity-90">
                <Link to={`/campaigns/${campaign.id}`}>تفصیلات دیکھیں</Link>
              </Button>
              <Button asChild className="flex-1 text-lg bg-gradient-primary hover:opacity-90">
                <Link to={`/donate?campaign=${campaign.id}`}>عطیہ دیں</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
