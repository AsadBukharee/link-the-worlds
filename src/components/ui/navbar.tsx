
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
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Flahi Gaon</Link>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground"
          onClick={toggleMenu}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-accent-foreground">Home</Link>
          <Link to="/campaigns" className="hover:text-accent-foreground">Campaigns</Link>
          <Link to="/about" className="hover:text-accent-foreground">About</Link>
          <Link to="/donate" className="hover:text-accent-foreground">Donate</Link>
          <Link to="/register" className="hover:text-accent-foreground">Register</Link>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-primary z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="hover:text-accent-foreground" onClick={toggleMenu}>Home</Link>
              <Link to="/campaigns" className="hover:text-accent-foreground" onClick={toggleMenu}>Campaigns</Link>
              <Link to="/about" className="hover:text-accent-foreground" onClick={toggleMenu}>About</Link>
              <Link to="/donate" className="hover:text-accent-foreground" onClick={toggleMenu}>Donate</Link>
              <Link to="/register" className="hover:text-accent-foreground" onClick={toggleMenu}>Register</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
