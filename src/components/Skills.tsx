// src/components/Skills.tsx
import { FaReact, FaNodeJs, FaGithub, FaMobileAlt } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiJavascript, SiFirebase, SiExpo } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact />, description: 'Building dynamic user interfaces and web apps.' },
    { name: 'React Native', icon: <SiReact />, description: 'Cross-platform mobile apps with React Native.' },
    { name: 'JavaScript', icon: <SiJavascript />, description: 'Core language for both web and mobile development.' },
    { name: 'Node.js', icon: <FaNodeJs />, description: 'Backend development with Node.js and Express.js.' },
    { name: 'Firebase', icon: <SiFirebase />, description: 'Cloud backend services for mobile and web apps.' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, description: 'Utility-first CSS framework for modern designs.' },
    { name: 'Expo', icon: <SiExpo />, description: 'Faster React Native development with Expo SDK.' },
    { name: 'GitHub', icon: <FaGithub />, description: 'Version control and collaboration for code.' },
    { name: 'Mobile App Development', icon: <FaMobileAlt />, description: 'Specializing in mobile app design and development.' },
  ];

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        My Expertise
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary/10"
          >
            <div className="flex items-center mb-4 transition-all duration-300 group">
              <span className="text-4xl text-primary group-hover:text-white transition duration-300">
                {skill.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4 group-hover:text-primary transition duration-300">
                {skill.name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition duration-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
