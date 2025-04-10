import { skills } from "../data/skills";
export default function Skills() {
  return (
    <section className="p-8 bg-gray-100 text-center animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}