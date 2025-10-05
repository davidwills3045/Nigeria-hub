import React, { useState, useRef } from 'react';
import { FaLandmark, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Opportunities', href: '#opportunities' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-primary to-[#005738] text-secondary shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo flex items-center gap-4">
            <FaLandmark className="text-3xl md:text-4xl text-accent" />
            <h1 className="text-xl md:text-3xl font-bold">
              Nigeria <span className="text-accent">Hub</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-medium hover:text-accent transition-colors duration-300 cursor-pointer py-2 px-1 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-accent p-2 z-60"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          } overflow-hidden bg-primary/95 backdrop-blur-sm rounded-lg mt-2`}
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block font-medium hover:text-accent transition-all duration-300 cursor-pointer py-3 px-4 rounded-lg hover:bg-white/10 active:bg-white/20"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;