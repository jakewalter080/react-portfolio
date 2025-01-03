// src/components/sections/Resume.jsx
import React from 'react';

const Resume = () => (
  <section className="container mx-auto p-4 max-w-4xl">
    <h2 className="text-3xl font-bold mb-6">Resume</h2>
    <div className="mb-6">
      <a 
        href="/resume.pdf" 
        download 
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
      >
        Download Resume
      </a>
    </div>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-3">Front-end Proficiencies</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Back-end Proficiencies</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Node.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Resume;