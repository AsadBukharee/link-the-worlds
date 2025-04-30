
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { registeredPhone, verifyOtp, resendOtp } = useAuth();
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "تصدیق ناکام",
        description: "برائے مہربانی درست 6 ہندسوں والا OTP درج کریں۔",
        variant: "destructive",
      });
      return;
    }

    if (!registeredPhone) {
      toast({
        title: "تصدیق ناکام",
        description: "فون نمبر نہیں ملا۔ براہ کرم پہلے رجسٹر کریں۔",
        variant: "destructive",
      });
      navigate("/register");
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await verifyOtp(registeredPhone, otp);
      
      if (success) {
        toast({
          title: "تصدیق کامیاب",
          description: "آپ کا اکاؤنٹ کامیابی سے تصدیق شدہ ہو گیا ہے۔",
        });
        navigate("/"); // Redirect to home page after successful verification
      } else {
        toast({
          title: "تصدیق ناکام",
          description: "غلط OTP۔ براہ کرم دوبارہ کوشش کریں۔",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast({
        title: "تصدیق ناکام",
        description: "تصدیق کے دوران ایک مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    if (!registeredPhone) {
      toast({
        title: "OTP دوبارہ بھیجنے میں ناکامی",
        description: "فون نمبر نہیں ملا۔ براہ کرم پہلے رجسٹر کریں۔",
        variant: "destructive",
      });
      navigate("/register");
      return;
    }

    setIsResending(true);

    try {
      const success = await resendOtp(registeredPhone);
      
      if (success) {
        toast({
          title: "OTP دوبارہ بھیج دیا گیا",
          description: "نیا OTP آپ کے فون نمبر پر بھیج دیا گیا ہے۔",
        });
      } else {
        toast({
          title: "OTP دوبارہ بھیجنے میں ناکامی",
          description: "OTP دوبارہ بھیجنے میں ایک مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      toast({
        title: "OTP دوبارہ بھیجنے میں ناکامی",
        description: "OTP دوبارہ بھیجنے میں ایک مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-md mx-auto">
        <Card className="shadow-dual-color hover:shadow-dual-hover transition-shadow border-none bg-gradient-card">
          <CardHeader>
            <CardTitle className="font-urdu text-right">اپنا اکاؤنٹ تصدیق کریں</CardTitle>
            <CardDescription className="font-urdu text-right">
              {registeredPhone ? `${registeredPhone} پر بھیجا گیا 6 ہندسوں والا کوڈ درج کریں۔` : "اپنے فون نمبر پر بھیجا گیا 6 ہندسوں والا کوڈ درج کریں۔"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-center py-4">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} index={index} />
                      ))}
                    </InputOTPGroup>
                  )}
                />
              </div>

              <Button 
                onClick={handleVerify} 
                className="w-full font-urdu bg-gradient-primary hover:opacity-90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "...تصدیق ہو رہی ہے" : "تصدیق کریں"}
              </Button>

              <div className="text-center pt-2">
                <Button 
                  variant="link" 
                  onClick={handleResendOtp}
                  disabled={isResending}
                  className="font-urdu text-primary hover:text-primary/80"
                >
                  {isResending ? "...دوبارہ بھیج رہے ہیں" : "OTP دوبارہ بھیجیں"}
                </Button>
              </div>

              <div className="text-center pt-2">
                <Button 
                  variant="link" 
                  onClick={() => navigate("/register")}
                  className="font-urdu text-muted-foreground hover:text-foreground"
                >
                  واپس رجسٹریشن پر جائیں
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyOtp;
