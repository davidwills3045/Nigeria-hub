import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from './Components/About';
import JobCards from "./Components/JobCards";
import Resources from './Components/Resources';
import Platforms from "./Components/Platforms";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = 80; // Adjust based on your header height
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      // Cleanup event listeners
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  return (
    <>
      <div className="min-h-screen bg-light">
        <Header />
        <Hero />
        <About />
        <JobCards />
        <Resources />
        <Platforms />
        <Footer />
      </div>
    </>
  );
}

export default App;
