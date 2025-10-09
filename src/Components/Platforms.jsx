import React from 'react';
import { FaTrello, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Platforms = () => {
  return (
    <section className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Join Our Mission?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Apply now to be part of Nigeria's healthcare technology revolution. We use streamlined platforms to make application easy and efficient.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">Current Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-3 text-accent">Healthcare AI Solutions</h4>
              <ul className="space-y-2 text-white/90">
                <li>• Medical imaging analysis</li>
                <li>• Clinical decision support</li>
                <li>• Patient data optimization</li>
                <li>• Diagnostic assistance tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Technology Development</h4>
              <ul className="space-y-2 text-white/90">
                <li>• Cloud infrastructure (Azure)</li>
                <li>• Mobile and web applications</li>
                <li>• Data analytics platforms</li>
                <li>• API development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://trello.com/b/f8i39h6l/radassist-ai-nigeria-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#0079bf] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaTrello className="text-xl" />
            View Open Roles on Trello
            <FaExternalLinkAlt className="text-sm" />
          </a>
          <a
           href="https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-accent text-dark px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaFileAlt className="text-xl" />
            Submit Your Task
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Platforms;