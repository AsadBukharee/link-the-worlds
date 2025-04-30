
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const formSchema = z.object({
  phone: z.string().min(10, {
    message: "فون نمبر درکار ہے۔ کم از کم 10 ہندسے",
  }),
  password: z.string().min(1, {
    message: "پاس ورڈ درکار ہے۔",
  }),
});

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      await login(values.phone, values.password);
      
      toast({
        title: "لاگ ان کامیاب",
        description: "آپ کامیابی سے لاگ ان ہو گئے ہیں۔",
      });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "لاگ ان ناکام",
        description: "فون نمبر یا پاس ورڈ غلط ہے۔",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-md mx-auto">
        <Card className="shadow-dual-color hover:shadow-dual-hover transition-shadow border-none bg-gradient-card">
          <CardHeader>
            <CardTitle className="font-urdu text-right">لاگ ان کریں</CardTitle>
            <CardDescription className="font-urdu text-right">
              اپنے اکاؤنٹ میں لاگ ان کریں
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-urdu text-right block">پاس ورڈ</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="اپنا پاس ورڈ درج کریں" {...field} className="font-urdu text-right" />
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
                  {isSubmitting ? "...لاگ ان ہو رہا ہے" : "لاگ ان کریں"}
                </Button>
                
                <div className="text-center font-urdu mt-4">
                  <p>
                    اکاؤنٹ نہیں ہے؟{" "}
                    <Link to="/register" className="text-primary hover:underline">
                      رجسٹر کریں
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
