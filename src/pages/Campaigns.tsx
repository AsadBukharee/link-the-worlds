
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";
import { campaignService } from "@/services/campaignService";

const Campaigns = () => {
  const { data: campaigns = [], isLoading, error } = useQuery({
    queryKey: ['campaigns'],
    queryFn: campaignService.getAllCampaigns
  });

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to calculate progress percentage
  const calculateProgress = (collected: number, target: number) => {
    return Math.min(Math.round((collected / target) * 100), 100);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-urdu">
        <div className="text-xl">لوڈ ہو رہا ہے...</div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching campaigns:", error);
    return (
      <div className="container mx-auto px-4 py-8 text-center font-urdu">
        <div className="text-xl text-red-600">مہمات لوڈ کرنے میں مسئلہ آ گیا</div>
      </div>
    );
  }

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
                src={campaign.image_url || "https://placehold.co/600x400?text=Campaign+Image"} 
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
                    <span>{formatDate(campaign.start_date)}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">{campaign.description}</p>
              
              <div className="bg-muted/20 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">پیش رفت</span>
                  <span>{calculateProgress(campaign.current_amount, campaign.target_amount)}%</span>
                </div>
                <Progress 
                  value={calculateProgress(campaign.current_amount, campaign.target_amount)}
                  className="h-2 bg-muted"
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>جمع شدہ: {campaign.current_amount.toLocaleString()} روپے</span>
                  <span>ہدف: {campaign.target_amount.toLocaleString()} روپے</span>
                </div>
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
