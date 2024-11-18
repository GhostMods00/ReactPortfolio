import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="src/assets/images/profile.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover shadow-lg mx-auto md:mx-0"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "https://placehold.co/400x400/102030/FFFFFF/png?text=Profile+Photo";
          }}
        />
        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            Hello! I'm a passionate web developer with expertise in building modern, 
            responsive web applications. I specialize in React, Node.js, and other 
            contemporary web technologies.
          </p>
          <p className="text-lg text-gray-600">
            With a background in computer science and several years of hands-on 
            experience, I enjoy creating efficient, user-friendly solutions to 
            complex problems.
          </p>
          <p className="text-lg text-gray-600">
            I'm always eager to learn new technologies and tackle challenging projects
            that push my boundaries as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;