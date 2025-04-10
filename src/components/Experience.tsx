import { experience } from "../data/experience";

  export default function Experience() {
    return (
      <section className="p-8 bg-gray-100 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
        <ul className="max-w-3xl mx-auto space-y-4">
          {experience.map((exp, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold text-lg">{exp.company}</h3>
              <p>{exp.role} <span className="text-gray-500">({exp.period})</span></p>
            </li>
          ))}
        </ul>
      </section>
    );
  }