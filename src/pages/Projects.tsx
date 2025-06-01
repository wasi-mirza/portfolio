import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

// src/pages/Projects.tsx
export default function ProjectsPage() {
    return (
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">All Projects</h1>
  
        {/* Reuse the project layout here */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </section>
    );
  }
  