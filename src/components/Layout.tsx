
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen font-urdu">
      {/* Navbar with higher z-index to appear above video */}
      <div className="relative z-30">
        <Navbar />
      </div>
      
      {/* Main content */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer with higher z-index to appear above video */}
      <div className="relative z-30">
        <Footer />
      </div>
      
      <Toaster />
    </div>
  );
};

export default Layout;
