import React from "react";
import { FaTrello, FaFileAlt } from "react-icons/fa";

const Platforms = () => {
  return (
    <section className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Application Platforms</h2>
        <p className="text-xl max-w-2xl mx-auto mb-12">
          We use industry-standard platforms to streamline our recruitment
          process and ensure a smooth experience for all applicants.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <a
            href="https://trello.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#0079bf] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaTrello className="text-xl" />
            View on Trello
          </a>
          <a
            href="https://forms.office.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#737373] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaFileAlt className="text-xl" />
            Apply via Microsoft Forms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
