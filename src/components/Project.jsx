import React from 'react';

function Project({ title, description, image, deployedUrl, githubUrl, technologies }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {technologies && (
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between">
          <a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;