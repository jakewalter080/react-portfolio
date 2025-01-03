import React from 'react';

const AboutMe = () => (
  <section className="container mx-auto p-4 max-w-4xl">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img
        src="/api/placeholder/300/300"
        alt="Developer Avatar"
        className="rounded-full w-48 h-48 object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
        Hi! I am a Marketing Coordinator with a proven background in paid search, paid social, and both B2C and B2B marketing. Over the years, I have honed my skills in campaign analysis, promotional content creation, and UI/UX design, which sparked my interest in the technical side of digital experiences and inspired me to transition into programming.
        My experience includes designing and managing customer-centric websites, which involved close collaboration with developers and gave me a glimpse into the power of coding. Wanting to expand my skill set, I began learning programming languages like JavaScript, Python, and SQL, and have also explored frameworks like React and backend tools like Node.js and Express.js.
        In my coding journey, I am driven by the same passion that guided my marketing career: creating innovative solutions and connecting people through engaging and intuitive designs. I am excited about leveraging my marketing background and technical skills to build dynamic, user-focused applications that solve real-world problems.
        With a Bachelor of Science in Advertising Management and a growing expertise in software development, I am eager to collaborate, learn, and contribute to projects that merge creativity and technology. Let`s build something great together!
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;