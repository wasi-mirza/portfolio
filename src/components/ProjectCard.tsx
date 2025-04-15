type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="text-sm font-medium text-primary hover:underline">
          View Project →
        </span>
      </div>
    </a>
  );
}
