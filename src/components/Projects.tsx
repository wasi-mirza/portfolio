import { projects } from "../data/projects";
import { Link } from 'react-router-dom';
  
  export default function Projects() {
    return (
      <section id="projects" className="bg-slate-50 dark:bg-slate-900 px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
  
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
  
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
  
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
  
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      View Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition rounded-lg"
          >
            View All Projects
          </Link>
        </div>
      </section>
    );
  }