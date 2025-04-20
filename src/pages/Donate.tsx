
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Lottie from "lottie-react";
import donateAnimation from "../assets/animations/donate.json";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "نام کم از کم 2 حروف کا ہونا چاہیے۔",
  }),
  accountTitle: z.string().min(2, {
    message: "اکاؤنٹ کا عنوان درکار ہے۔",
  }),
  amount: z.string().min(1, {
    message: "رقم درکار ہے۔",
  }),
  transactionId: z.string().min(4, {
    message: "ٹرانزیکشن آئی ڈی درکار ہے۔",
  }),
  // File validation will be handled separately
  purpose: z.string().min(1, {
    message: "عطیہ کا مقصد منتخب کریں۔",
  }),
  location: z.string().min(1, {
    message: "شہر کا نام درکار ہے۔",
  }),
  privacyOption: z.enum(["public", "private"]),
  note: z.string().optional(),
});

const charityTypes = [
  { id: "1", name: "زکوٰۃ" },
  { id: "2", name: "شادی کی معاونت" },
  { id: "3", name: "طبی علاج" },
  { id: "4", name: "تعمیرات" },
  { id: "5", name: "تعلیم" },
];

const Donate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionImage, setTransactionImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      accountTitle: "",
      amount: "",
      transactionId: "",
      purpose: "",
      location: "",
      privacyOption: "public",
      note: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setTransactionImage(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!transactionImage) {
      toast({
        title: "ٹرانزیکشن کی تصویر",
        description: "براہ کرم اپنی ٹرانزیکشن کی تصویر اپلوڈ کریں۔",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "عطیہ جمع کرایا گیا",
        description: "آپ کی سخاوت کا شکریہ!",
      });
      setIsSubmitting(false);
      form.reset();
      setTransactionImage(null);
      setImagePreview(null);
    }, 1500);
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-8 w-64 mx-auto">
            <Lottie animationData={donateAnimation} loop={true} />
          </div>
          <h1 className="text-3xl font-bold mb-2 font-urdu">عطیہ دیں</h1>
          <p className="text-muted-foreground font-urdu">ہماری کمیونٹی کی مدد کریں</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 shadow-dual-color hover:shadow-dual-hover transition-shadow border-none">
            <CardHeader>
              <CardTitle className="font-urdu text-right">بینک اکاؤنٹ کی تفصیلات</CardTitle>
            </CardHeader>
            <CardContent className="font-urdu text-right">
              <p className="mb-4"><strong>اکاؤنٹ ٹائٹل:</strong> فلاحی گاؤں ویلفیئر</p>
              <p className="mb-4"><strong>بینک:</strong> مثال بینک</p>
              <p className="mb-4"><strong>اکاؤنٹ نمبر:</strong> 1234-5678-9012</p>
              <p className="mb-4"><strong>آئی بی اے این:</strong> PK00ABCD1234567890123456</p>
              <p><strong>سوئفٹ کوڈ:</strong> EXAMPAK12</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-dual-color hover:shadow-dual-hover transition-shadow border-none">
            <CardHeader>
              <CardTitle className="font-urdu text-right">عطیہ فارم</CardTitle>
              <CardDescription className="font-urdu text-right">
                براہ کرم اپنے عطیہ کی تفصیلات پُر کریں
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
                        <FormLabel className="font-urdu text-right">آپ کا پورا نام</FormLabel>
                        <FormControl>
                          <Input placeholder="اپنا نام درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="accountTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right">اکاؤنٹ کا عنوان</FormLabel>
                        <FormControl>
                          <Input placeholder="بینک اکاؤنٹ کا عنوان درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right">عطیہ کی رقم (PKR)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="رقم درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="transactionId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right">ٹرانزیکشن آئی ڈی</FormLabel>
                        <FormControl>
                          <Input placeholder="بینک ٹرانزیکشن آئی ڈی درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <FormLabel className="font-urdu text-right block">ٹرانزیکشن کی تصویر</FormLabel>
                    <div className="border-2 border-dashed rounded-md border-muted p-4 text-center">
                      <Input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange}
                        className="hidden"
                        id="transactionImage"
                      />
                      <label 
                        htmlFor="transactionImage" 
                        className="cursor-pointer flex flex-col items-center justify-center gap-2"
                      >
                        {imagePreview ? (
                          <div className="relative w-full">
                            <img 
                              src={imagePreview} 
                              alt="Transaction receipt" 
                              className="max-h-48 mx-auto rounded-md object-contain"
                            />
                            <p className="mt-2 text-sm text-muted-foreground font-urdu">تصویر بدلنے کے لیے کلک کریں</p>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-8 w-8 text-muted-foreground" />
                            <p className="font-urdu">ٹرانزیکشن کی رسید کی تصویر اپلوڈ کریں</p>
                            <p className="text-sm text-muted-foreground font-urdu">یہاں کلک کریں یا تصویر کو یہاں ڈراپ کریں</p>
                          </>
                        )}
                      </label>
                    </div>
                    {!transactionImage && <p className="text-destructive text-sm font-urdu text-right">ٹرانزیکشن کی تصویر اپلوڈ کرنا ضروری ہے</p>}
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right">عطیہ کا مقصد</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="font-urdu text-right">
                              <SelectValue placeholder="عطیہ کا مقصد منتخب کریں" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {charityTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id} className="font-urdu text-right">
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="font-urdu text-right">
                          اپنے عطیہ کا مقصد منتخب کریں
                        </FormDescription>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right">آپ کا مقام (شہر)</FormLabel>
                        <FormControl>
                          <Input placeholder="شہر کا نام درج کریں" {...field} className="font-urdu text-right" />
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacyOption"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-urdu text-right block">رازداری کا آپشن</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 flex-row-reverse justify-end">
                              <FormLabel className="font-normal font-urdu">
                                عوامی (میرا نام اور عطیہ کی رقم دکھائیں)
                              </FormLabel>
                              <FormControl>
                                <RadioGroupItem value="public" />
                              </FormControl>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 flex-row-reverse justify-end">
                              <FormLabel className="font-normal font-urdu">
                                نجی (میری شناخت چھپائیں)
                              </FormLabel>
                              <FormControl>
                                <RadioGroupItem value="private" />
                              </FormControl>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="font-urdu text-right" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-urdu text-right">اضافی نوٹ (اختیاری)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="اپنے عطیہ کے بارے میں کوئی اضافی معلومات شامل کریں"
                            className="resize-none font-urdu text-right"
                            {...field}
                          />
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
                    {isSubmitting ? "...پروسیسنگ" : "عطیہ جمع کروائیں"}
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
