import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover shadow-lg mx-auto md:mx-0"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "https://i.imgur.com/gT5x16F.jpeg";
          }}
        />
        <div className="space-y-4">
          <p className="text-lg text-gray-600">
          My journey began with a simple "Hello World," but quickly evolved into an obsession with creating seamless, powerful web applications. I thrive on the challenge of bridging frontend aesthetics with backend functionality, turning complex problems into elegant solutions.
          </p>
          <p className="text-lg text-gray-600">
        
    
💻 Currently mastering the full stack ecosystem.

🌐 Fascinated by modern web technologies and cybersecurity.

🔧 Building projects that merge functionality with futuristic design.

🚀 Passionate about clean code and optimal performance.

🎮 Influenced by cyber aesthetics and tech culture.

📚 Perpetual learner, always exploring new technologies.
          </p>
          <p className="text-lg text-gray-600">
          I believe in:

Writing code that tells a story,
Building applications that make a difference,
Contributing to the developer community,
Pushing the boundaries of conventional design,
Maintaining the perfect balance between form and function,
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;