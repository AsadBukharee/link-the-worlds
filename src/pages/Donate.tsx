
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  amount: z.string().min(1, {
    message: "Amount is required.",
  }),
  location: z.string().optional(),
  privacyOption: z.enum(["public", "private"]),
  donationType: z.string().min(1, {
    message: "Please select a donation type.",
  }),
  note: z.string().optional(),
});

const charityTypes = [
  { id: "1", name: "Zakat" },
  { id: "2", name: "Marriage Assistance" },
  { id: "3", name: "Medical Treatment" },
  { id: "4", name: "Construction" },
  { id: "5", name: "Education" },
];

const Donate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      location: "",
      privacyOption: "public",
      donationType: "",
      note: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Donation Recorded",
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
          <h1 className="text-3xl font-bold mb-2">Make a Donation</h1>
          <p className="text-muted-foreground">Support our community initiatives</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Bank Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4"><strong>Account Title:</strong> Flahi Gaon Welfare</p>
              <p className="mb-4"><strong>Bank:</strong> Example Bank</p>
              <p className="mb-4"><strong>Account Number:</strong> 1234-5678-9012</p>
              <p className="mb-4"><strong>IBAN:</strong> PK00ABCD1234567890123456</p>
              <p><strong>Swift Code:</strong> EXAMPAK12</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Donation Form</CardTitle>
              <CardDescription>
                Please fill in your donation details
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
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Location (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="City, Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacyOption"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Privacy Option</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="public" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Public (Show my name and donation amount)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="private" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Private (Hide my identity)
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="donationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Donation Purpose</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select donation purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {charityTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the purpose for your donation
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Note (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add any additional information about your donation"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Submit Donation"}
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

export default Donate;
