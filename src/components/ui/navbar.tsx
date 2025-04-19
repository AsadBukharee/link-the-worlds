
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
    <nav className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-secondary transition-colors">ہمارا64</Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:text-secondary transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link to="/campaigns" className="hover:text-secondary transition-colors">Campaigns</Link>
            <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link to="/donate" className="hover:text-secondary transition-colors">Donate</Link>
            <Link to="/register" className="hover:text-secondary transition-colors">Register</Link>
          </div>
          
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-primary/95 backdrop-blur-sm z-50 md:hidden border-t border-primary-foreground/10">
              <div className="flex flex-col p-4 space-y-4">
                <Link to="/" className="hover:text-secondary transition-colors" onClick={toggleMenu}>Home</Link>
                <Link to="/campaigns" className="hover:text-secondary transition-colors" onClick={toggleMenu}>Campaigns</Link>
                <Link to="/about" className="hover:text-secondary transition-colors" onClick={toggleMenu}>About</Link>
                <Link to="/donate" className="hover:text-secondary transition-colors" onClick={toggleMenu}>Donate</Link>
                <Link to="/register" className="hover:text-secondary transition-colors" onClick={toggleMenu}>Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
