import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAndroid,
  FaMicrosoft,
  FaAmazon,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { useRive } from "@rive-app/react-canvas";
import { RiNextjsFill } from "react-icons/ri";
//@ts-ignore
import developer from "../../public/animations/developer.riv";

export default function Skills() {
  const { RiveComponent } = useRive({
    src: developer,
    autoplay: true,
  });

  const [showAll, setShowAll] = useState(false);

  const skillCategories = {
    "Mobile App Development": [
      {
        name: "React Native",
        icon: <SiReact />,
        description: "Cross-platform mobile apps with React Native.",
      },
      {
        name: "Android Development",
        icon: <FaAndroid />,
        description: "Development environment for building Android apps.",
      },
    ],
    "Web & Backend Development": [
      {
        name: "React",
        icon: <FaReact />,
        description: "Building dynamic user interfaces and web apps.",
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
        description: "React framework for building SSR web applications.",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        description: "Core language for both web and mobile development.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        description: "Utility-first CSS framework for modern designs.",
      },
      {
        name: "HTML",
        icon: <SiHtml5 />,
        description: "Markup language for building web content.",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        description: "Stylesheet language for designing web pages.",
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        description: "Design tool for beautiful, responsive UI/UX.",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        description: "Version control and collaboration for code.",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        description: "Backend development with Node.js and Express.js.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        description: "NoSQL database for modern web apps.",
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
        description: "ORM for database access and management.",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql />,
        description: "Query language and runtime for APIs.",
      },
    ],
    "Cloud & DevOps": [
      {
        name: "Firebase",
        icon: <SiFirebase />,
        description: "Cloud backend services for mobile and web apps.",
      },
      {
        name: "AWS",
        icon: <FaAmazon />,
        description: "Amazon Web Services for scalable cloud apps.",
      },
      {
        name: "Azure",
        icon: <FaMicrosoft />,
        description: "Microsoft Azure cloud platform services.",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        description: "CI/CD and collaboration for modern DevOps workflows.",
      },
    ],
  };

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        My Expertise
      </h2>

      <div className="w-full flex justify-center items-center min-h-[300px]">
        <div className="w-[400px] h-[400px]">
          <RiveComponent />
        </div>
      </div>

      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            {category}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.slice(0, showAll ? skills.length : 4).map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary/10"
              >
                <div className="flex items-center mb-4 group">
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
        </div>
      ))}

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
}
