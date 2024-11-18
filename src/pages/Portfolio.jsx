import Project from '../components/Project';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-gray-800 font-heading">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;