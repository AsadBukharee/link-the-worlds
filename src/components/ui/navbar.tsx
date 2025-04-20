
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#8F62D5] via-[#7091E7] to-[#546DC1] text-white shadow-lg font-urdu">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-secondary transition-colors">ہمارا64</Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-secondary transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-secondary transition-colors">ہوم</Link>
            <Link to="/campaigns" className="hover:text-secondary transition-colors">مہمات</Link>
            <Link to="/problems" className="hover:text-secondary transition-colors">مسائل</Link>
            <Link to="/news" className="hover:text-secondary transition-colors">خبریں</Link>
            <Link to="/blog" className="hover:text-secondary transition-colors">بلاگ</Link>
            <Link to="/about" className="hover:text-secondary transition-colors">ہمارے بارے میں</Link>
            <Link to="/donate" className="hover:text-secondary transition-colors">عطیہ</Link>
            <Link to="/register" className="hover:text-secondary transition-colors">رجسٹر</Link>
          </div>
          
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-[#8F62D5]/95 backdrop-blur-sm z-50 md:hidden border-t border-white/10">
              <div className="flex flex-col p-4 space-y-4">
                <Link to="/" className="hover:text-secondary transition-colors" onClick={toggleMenu}>ہوم</Link>
                <Link to="/campaigns" className="hover:text-secondary transition-colors" onClick={toggleMenu}>مہمات</Link>
                <Link to="/problems" className="hover:text-secondary transition-colors" onClick={toggleMenu}>مسائل</Link>
                <Link to="/news" className="hover:text-secondary transition-colors" onClick={toggleMenu}>خبریں</Link>
                <Link to="/blog" className="hover:text-secondary transition-colors" onClick={toggleMenu}>بلاگ</Link>
                <Link to="/about" className="hover:text-secondary transition-colors" onClick={toggleMenu}>ہمارے بارے میں</Link>
                <Link to="/donate" className="hover:text-secondary transition-colors" onClick={toggleMenu}>عطیہ</Link>
                <Link to="/register" className="hover:text-secondary transition-colors" onClick={toggleMenu}>رجسٹر</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
