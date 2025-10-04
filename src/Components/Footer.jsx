import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebook, href: "#" },
  ];

  const quickLinks = [
    "Home",
    "About Us",
    "Opportunities",
    "Resources",
    "Contact",
  ];
  return (
    <footer id="contact" className="bg-dark text-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Nigeria Hub</h3>
            <p className="text-gray-400 mb-6">
              Connecting talent with opportunities to build a better Nigeria
              together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((SocialIcon, index) => (
                <a
                  key={index}
                  href={SocialIcon.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <SocialIcon.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent" />
                <span>123 Innovation Street, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <span>info@nigeriahub.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2025 Nigeria Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
