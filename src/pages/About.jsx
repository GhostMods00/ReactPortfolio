const About = () => {
    return (
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 font-heading">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/api/placeholder/200/200"
            alt="Your Name"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
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
          </div>
        </div>
      </section>
    );
  };
  
  export default About;