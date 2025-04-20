
import Lottie from "lottie-react";
import sponsorAnimation from "../assets/animations/sponsor.json";
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
    message: "نام کم از کم 2 حروف کا ہونا چاہیے۔",
  }),
  amount: z.string().min(1, {
    message: "رقم درکار ہے۔",
  }),
  fundType: z.string().min(1, {
    message: "براہ کرم فنڈ کی قسم منتخب کریں۔",
  }),
  email: z.string().email({
    message: "براہ کرم درست ای میل ایڈریس درج کریں۔",
  }),
  phone: z.string().min(10, {
    message: "فون نمبر درست ہونا چاہیے۔",
  }),
});

const fundTypes = [
  { id: "1", name: "امام مسجد" },
  { id: "2", name: "تعلیمی فنڈ" },
  { id: "3", name: "صحت کا فنڈ" },
  { id: "4", name: "بزرگوں کی دیکھ بھال" },
  { id: "5", name: "کمیونٹی ترقی" },
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
        title: "اسپانسرشپ جمع کرا دی گئی",
        description: "آپ کی سخاوت کا شکریہ!",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-8 w-64 mx-auto">
            <Lottie animationData={sponsorAnimation} loop={true} />
          </div>
          <h1 className="text-3xl font-bold mb-2 font-urdu">فنڈ اسپانسر کریں</h1>
          <p className="text-muted-foreground font-urdu">مخصوص کمیونٹی اقدامات کی حمایت کریں</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 font-urdu text-right">اسپانسر کیوں کریں؟</h2>
            <p className="mb-4 font-urdu text-right">فنڈ کو اسپانسر کر کے آپ ہماری کمیونٹی پر مستقل اثر ڈالتے ہیں۔ آپ کا تعاون ضروری خدمات اور ترقیاتی منصوبوں کو برقرار رکھنے میں مدد کرتا ہے۔</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3 font-urdu text-right">دستیاب فنڈز</h3>
            <ul className="space-y-4">
              {fundTypes.map((type) => (
                <li key={type.id} className="bg-gradient-secondary p-4 rounded-md">
                  <h4 className="font-bold font-urdu text-right">{type.name}</h4>
                  <p className="text-sm text-muted-foreground font-urdu text-right">ہماری کمیونٹی کی {type.name.toLowerCase()} اقدامات کے ذریعے مدد کرتا ہے</p>
                </li>
              ))}
            </ul>
          </div>

          <Card className="shadow-dual-color hover:shadow-dual-hover transition-shadow border-none bg-gradient-card">
            <CardHeader>
              <CardTitle className="font-urdu text-right">اسپانسرشپ فارم</CardTitle>
              <CardDescription className="font-urdu text-right">
                براہ کرم اپنی اسپانسرشپ کی تفصیلات درج کریں۔
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
                        <FormLabel className="font-urdu text-right block">آپ کا نام</FormLabel>
                        <FormControl>
                          <Input placeholder="اپنا نام درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right block">ای میل</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="اپنی ای میل درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right block">فون نمبر</FormLabel>
                        <FormControl>
                          <Input placeholder="اپنا فون نمبر درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fundType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right block">فنڈ کی قسم</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="font-urdu text-right">
                              <SelectValue placeholder="فنڈ کی قسم منتخب کریں" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {fundTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id} className="font-urdu text-right">
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="font-urdu text-right">
                          وہ فنڈ منتخب کریں جسے آپ اسپانسر کرنا چاہتے ہیں۔
                        </FormDescription>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right block">اسپانسرشپ کی رقم (PKR)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="رقم درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full font-urdu bg-gradient-primary hover:opacity-90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "...پروسیسنگ" : "اسپانسرشپ جمع کروائیں"}
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
