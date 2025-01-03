import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="container mx-auto p-4">
        <div className="flex justify-center space-x-6">
        <a 
          href="https://github.com/jakewalter080" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/jacob-taylor-walter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        </div>
    </div>
  </footer>
);

export default Footer;