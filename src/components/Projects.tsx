import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-900 px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, 3).map((project, i) => (
          <ProjectCard key={i} {...project} />
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
