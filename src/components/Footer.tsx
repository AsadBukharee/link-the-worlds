
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Flahi Gaon</h3>
            <p className="mb-4">Let's Make Our Village a Paradise</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/campaigns" className="hover:underline">Campaigns</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/donate" className="hover:underline">Donate</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Flahi Gaon Village</p>
            <p>Email: contact@flahigaon.org</p>
            <p>Phone: +92 000 0000000</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Flahi Gaon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
