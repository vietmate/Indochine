import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkBg = transparent && !scrolled;
  const textColor = isDarkBg ? 'text-white' : 'text-slate-900 dark:text-white';
  const bgColor = isDarkBg ? 'bg-transparent' : 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-[1800px] mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-primary size-8">
             <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className={`text-xl font-black tracking-tight uppercase ${textColor}`}>Vietmate</span>
        </Link>

        <div className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] ${textColor}`}>
          <Link to="/" className="hover:text-primary transition-colors">Destinations</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Stories</Link>
          <Link to="/tour/hanoi" className="hover:text-primary transition-colors">Tours</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
           <Link to="/dashboard" className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${textColor}`}>
              Log In
           </Link>
           <button className="md:hidden">
              <span className={`material-symbols-outlined ${textColor}`}>menu</span>
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;