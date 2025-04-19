
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">ہمارا64</h3>
            <p className="mb-4 text-primary-foreground/80">Let's Make Our Village a Paradise</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/campaigns" className="hover:text-secondary transition-colors">Campaigns</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/donate" className="hover:text-secondary transition-colors">Donate</Link></li>
              <li><Link to="/register" className="hover:text-secondary transition-colors">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Flahi Gaon Village</p>
              <p>Email: contact@flahigaon.org</p>
              <p>Phone: +92 000 0000000</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-primary-foreground/10 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ہمارا64. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
