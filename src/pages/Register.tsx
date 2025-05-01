
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Lottie from "lottie-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import registrationAnimation from "../assets/animations/registration.json";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "پورا نام کم از کم 2 حروف کا ہونا چاہیے۔",
  }),
  phone: z.string().min(10, {
    message: "فون نمبر کم از کم 10 ہندسوں کا ہونا چاہیے۔",
  }),
  cnic: z.string().min(13, {
    message: "شناختی کارڈ نمبر 13 ہندسوں کا ہونا چاہیے (بغیر ڈیش کے)۔",
  }).max(13, {
    message: "شناختی کارڈ نمبر 13 ہندسوں کا ہونا چاہیے (بغیر ڈیش کے)۔",
  }),
});

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      cnic: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "رجسٹریشن کامیاب",
        description: "آپ فلاحی گاؤں کمیونٹی میں رجسٹر ہو چکے ہیں۔",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-md mx-auto">
        <div className="mb-8 w-64 mx-auto">
          <Lottie animationData={registrationAnimation} loop={true} />
        </div>
        
        <Card className="shadow-dual-color hover:shadow-dual-hover transition-shadow border-none bg-gradient-card">
          <CardHeader>
            <CardTitle className="font-urdu text-right">اپنے آپ کو رجسٹر کریں</CardTitle>
            <CardDescription className="font-urdu text-right">
              اپنی تفصیلات فراہم کر کے ہماری گاؤں کی کمیونٹی میں شامل ہوں۔
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-urdu text-right block">پورا نام</FormLabel>
                      <FormControl>
                        <Input placeholder="اپنا پورا نام درج کریں" {...field} className="font-urdu text-right" />
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
                      <FormDescription className="font-urdu text-right">
                        فارمیٹ: 03001234567 (بغیر خالی جگہ یا ڈیش کے)
                      </FormDescription>
                      <FormMessage className="font-urdu text-right" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cnic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-urdu text-right block">شناختی کارڈ نمبر</FormLabel>
                      <FormControl>
                        <Input placeholder="اپنا شناختی کارڈ نمبر درج کریں" {...field} className="font-urdu text-right" />
                      </FormControl>
                      <FormDescription className="font-urdu text-right">
                        13 ہندسے بغیر ڈیش کے
                      </FormDescription>
                      <FormMessage className="font-urdu text-right" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full font-urdu bg-gradient-primary hover:opacity-90" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "...رجسٹریشن" : "رجسٹر کریں"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
