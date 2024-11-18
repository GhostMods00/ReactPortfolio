import React from 'react';
import Project from '../components/Project';
import { projects } from '../data/projects';

function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;