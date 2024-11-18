const Resume = () => {
  const proficiencies = {
    frontEnd: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
     'Next.js',
      'Responsive Design',
      'Bootstrap',
      'Tailwind CSS'
    ],
    backEnd: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'RESTful APIs'
    ],
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'Chrome DevTools',
      'Postman'
    ]
  };
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 font-heading">
        Resume
      </h2>
      
      <div className="mb-8">
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Download Resume
        </a>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Front-End Proficiencies
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {proficiencies.frontEnd.map((item, index) => (
              <li 
                key={index}
                className="flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Back-End Proficiencies
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {proficiencies.backEnd.map((item, index) => (
              <li 
                key={index}
                className="flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Development Tools
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {proficiencies.tools.map((item, index) => (
              <li 
                key={index}
                className="flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;