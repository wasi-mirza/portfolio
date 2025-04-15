import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-slate-900 px-6 py-24 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
        Experience
      </h2>

      <ol className="relative border-l border-slate-300 dark:border-slate-700">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-12 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-slate-900">
              {/* Dot or icon */}
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </span>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} &middot; {exp.duration}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
