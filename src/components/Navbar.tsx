import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-sm backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`text-2xl font-semibold font-['Playfair_Display'] ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            ArborCraft
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 relative px-1 ${
                  isScrolled
                    ? location.pathname === link.path
                      ? 'text-gray-900 after:bg-gray-900'
                      : 'text-gray-900 hover:text-gray-900'
                    : location.pathname === link.path
                    ? 'text-white after:bg-white'
                    : 'text-white hover:text-white'
                } after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left ${
                  location.pathname === link.path ? 'after:scale-x-100' : 'after:scale-x-0'
                } after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`} 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <span className="text-2xl font-semibold font-['Playfair_Display']">ArborCraft</span>
          <button className="text-gray-800" onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-16 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl relative px-1 ${
                location.pathname === link.path 
                  ? 'text-gray-900 after:bg-gray-900 after:scale-x-100' 
                  : 'text-gray-900 hover:text-gray-900 after:scale-x-0'
              } after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 btn-primary"
            onClick={closeMenu}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;