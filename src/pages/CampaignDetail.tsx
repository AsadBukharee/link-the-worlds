
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock data for campaigns
const campaignData = [
  {
    id: "C64-1001",
    title: "School Renovation Project",
    description: "Help us renovate the primary school building to provide better facilities for our children. The current building is in poor condition and needs significant repairs including roof replacement, wall plastering, electrical rewiring, and new furniture for classrooms. Your contributions will directly benefit over 200 children who attend this school daily.",
    targetAmount: 500000,
    collectedAmount: 275000,
    startDate: "2025-01-15",
    endDate: "2025-04-30",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
    donors: [
      { name: "Ahmed Khan", amount: 50000, isAnonymous: false, date: "2025-01-20" },
      { name: "Anonymous", amount: 25000, isAnonymous: true, date: "2025-01-25" },
      { name: "Fatima Bibi", amount: 100000, isAnonymous: false, date: "2025-02-02" },
      { name: "Anonymous", amount: 100000, isAnonymous: true, date: "2025-02-05" },
    ]
  },
  {
    id: "C64-1002",
    title: "Healthcare Center Equipment",
    description: "We need to purchase essential medical equipment for our village healthcare center. The medical center currently lacks basic diagnostic equipment, treatment facilities, and emergency care tools. Your contributions will help us purchase an ECG machine, blood testing equipment, patient beds, and basic surgical tools. This will improve healthcare access for over 5,000 residents of our village.",
    targetAmount: 750000,
    collectedAmount: 450000,
    startDate: "2025-02-01",
    endDate: "2025-05-15",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
    donors: [
      { name: "Mohammad Ali", amount: 150000, isAnonymous: false, date: "2025-02-10" },
      { name: "Anonymous", amount: 100000, isAnonymous: true, date: "2025-02-15" },
      { name: "Zainab Ahmed", amount: 200000, isAnonymous: false, date: "2025-03-01" },
    ]
  },
  {
    id: "C64-1003",
    title: "Community Water Project",
    description: "Help us improve the village water supply system for clean drinking water. Our village currently relies on a single water source that is insufficient and often contaminated. This project aims to install a new water treatment plant, create additional wells, and extend the pipeline network to reach all households. Clean water access will dramatically improve health outcomes and quality of life for all residents.",
    targetAmount: 1000000,
    collectedAmount: 350000,
    startDate: "2025-03-01",
    endDate: "2025-06-30",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
    donors: [
      { name: "Imran Shah", amount: 200000, isAnonymous: false, date: "2025-03-05" },
      { name: "Anonymous", amount: 50000, isAnonymous: true, date: "2025-03-10" },
      { name: "Saima Nawaz", amount: 100000, isAnonymous: false, date: "2025-03-15" },
    ]
  },
  {
    id: "C64-1004",
    title: "Village Sports Ground",
    description: "Let's build a proper sports facility for our youth to promote healthy activities. The current playground is undeveloped and lacks basic amenities. This project will create a proper cricket pitch, volleyball court, and football field with appropriate boundary markings, seating areas, and lighting for evening games. The facility will serve as a community gathering point and encourage physical activity among youth.",
    targetAmount: 600000,
    collectedAmount: 120000,
    startDate: "2025-02-15",
    endDate: "2025-07-15",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    donors: [
      { name: "Hassan Raza", amount: 50000, isAnonymous: false, date: "2025-02-20" },
      { name: "Anonymous", amount: 70000, isAnonymous: true, date: "2025-03-01" },
    ]
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  amount: z.string().min(1, {
    message: "Amount is required.",
  }),
  isAnonymous: z.string(),
});

const CampaignDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Find campaign by ID from mock data
    const foundCampaign = campaignData.find(c => c.id === id);
    if (foundCampaign) {
      setCampaign(foundCampaign);
    }
  }, [id]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      isAnonymous: "false",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Donation Received",
        description: "Thank you for contributing to this campaign!",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to calculate progress percentage
  const calculateProgress = (collected: number, target: number) => {
    return Math.min(Math.round((collected / target) * 100), 100);
  };

  if (!campaign) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Campaign Not Found</h1>
        <p className="mb-6">The campaign you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/campaigns">Back to Campaigns</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/campaigns">← Back to Campaigns</Link>
          </Button>
        </div>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-lg mb-8">
          <div className="h-64 overflow-hidden">
            <img 
              src={campaign.image} 
              alt={campaign.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <h1 className="text-3xl font-bold">{campaign.title}</h1>
                <p className="text-muted-foreground">Campaign ID: {campaign.id}</p>
              </div>
              
              <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Start: {formatDate(campaign.startDate)}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>End: {formatDate(campaign.endDate)}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="whitespace-pre-line">{campaign.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Fundraising Progress</span>
                <span>{calculateProgress(campaign.collectedAmount, campaign.targetAmount)}%</span>
              </div>
              <Progress value={calculateProgress(campaign.collectedAmount, campaign.targetAmount)} className="h-4" />
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-lg font-bold">PKR {campaign.collectedAmount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">raised of PKR {campaign.targetAmount.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{campaign.donors.length}</p>
                  <p className="text-sm text-muted-foreground">donors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Donors List</CardTitle>
              <CardDescription>People who have contributed to this campaign</CardDescription>
            </CardHeader>
            <CardContent>
              {campaign.donors.length > 0 ? (
                <div className="space-y-4">
                  {campaign.donors.map((donor: any, index: number) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-medium">{donor.name}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(donor.date)}</p>
                      </div>
                      <p className="font-bold">PKR {donor.amount.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No donors yet. Be the first to contribute!</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contribute to this Campaign</CardTitle>
              <CardDescription>Your donation will help us reach our goal</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Donation Amount (PKR)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="isAnonymous"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Privacy Option</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select privacy option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="false">Show my name publicly</SelectItem>
                            <SelectItem value="true">Donate anonymously</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Donate Now"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
