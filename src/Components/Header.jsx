import React from "react";
import { FaLandmark } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Opportunities", href: "#opportunities" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80; // Height of fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full z-50 top-0 left-0 fixed bg-gradient-to-br from-primary to-[#005738] text-secondary shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="logo flex items-center gap-4">
            <FaLandmark className="text-4xl text-accent" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Nigeria <span className="text-accent">Hub</span>
            </h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-medium hover:text-accent transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
