
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  amount: z.string().min(1, {
    message: "Amount is required.",
  }),
  fundType: z.string().min(1, {
    message: "Please select a fund type.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be valid.",
  }),
});

const fundTypes = [
  { id: "1", name: "Imam Masjid" },
  { id: "2", name: "Educational Fund" },
  { id: "3", name: "Healthcare Fund" },
  { id: "4", name: "Elderly Care" },
  { id: "5", name: "Community Development" },
];

const Sponsor = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      fundType: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Sponsorship Recorded",
        description: "Thank you for your generosity!",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Sponsor a Fund</h1>
          <p className="text-muted-foreground">Support specific community initiatives</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Sponsor?</h2>
            <p className="mb-4">By sponsoring a fund, you make a lasting impact on our community. Your contribution helps sustain vital services and development projects.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Available Funds</h3>
            <ul className="space-y-4">
              {fundTypes.map((type) => (
                <li key={type.id} className="bg-secondary p-4 rounded-md">
                  <h4 className="font-bold">{type.name}</h4>
                  <p className="text-sm text-muted-foreground">Supports our community through {type.name.toLowerCase()} initiatives</p>
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sponsorship Form</CardTitle>
              <CardDescription>
                Please fill in your sponsorship details
              </CardDescription>
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fundType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fund Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select fund type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {fundTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the fund you want to sponsor
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sponsorship Amount (PKR)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Submit Sponsorship"}
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

export default Sponsor;
