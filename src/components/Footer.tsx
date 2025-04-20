
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#8F62D5] to-[#7091E7] text-white font-urdu">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">ہمارا64</h3>
            <p className="mb-4 text-white/80">ہمارے گاؤں کو جنت بنائیں</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">فوری لنکس</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">ہوم</Link></li>
              <li><Link to="/campaigns" className="hover:text-secondary transition-colors">مہمات</Link></li>
              <li><Link to="/problems" className="hover:text-secondary transition-colors">مسائل</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">ہمارے بارے میں</Link></li>
              <li><Link to="/donate" className="hover:text-secondary transition-colors">عطیہ</Link></li>
              <li><Link to="/register" className="hover:text-secondary transition-colors">رجسٹر</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">رابطہ</h3>
            <div className="space-y-2 text-white/80">
              <p>فلاحی گاؤں</p>
              <p>ای میل: contact@flahigaon.org</p>
              <p>فون: +92 000 0000000</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ہمارا64. تمام حقوق محفوظ ہیں۔</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
