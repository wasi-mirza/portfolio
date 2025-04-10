import { projects } from "../data/projects";
  
  export default function Projects() {
    return (
      <section className="p-8 bg-white text-center animate-fadeInUp" id="projects">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  