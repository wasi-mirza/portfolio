import { Link } from "react-router-dom";
import { skills } from "../data/skills";

export default function AboutMe() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
        #codewithwasi
      </h1>

      <div className="max-w-4xl mx-auto text-left space-y-8">
        {/* Bio */}
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am <strong>Wasi Mirza</strong>, working as{" "}
          <strong>Senior Software Engineer</strong> @ Enerscript Technologies.
          I'm a Fullstack Developer with a strong background in building
          scalable mobile and web applications. I hold a Bachelor's degree in
          Computer Applications from{" "}
          <strong>Savitribai Phule Pune University</strong> with a focus on
          UI/UX, frontend development, and system design.
        </p>

        {/* Skill Stack */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Skills & Stack
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary">
              Notable Projects
            </h2>
            <Link
              to="/projects"
              className="text-sm text-primary hover:underline font-medium"
            >
              View All →
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              📱 Mobile App Development
            </h3>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <a
                  href="https://play.google.com/store/apps/developer?id=Club+Mahindra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Club Mahindra Holidays App
                </a>{" "}
                – Main app for bookings & member services.
              </li>
              <li>
                <a
                  href="https://play.google.com/store/search?q=making%20magical&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Making Magical App
                </a>{" "}
                – Idea submission platform.
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=clubmahindra.com.myapplication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  OPC App
                </a>{" "}
                – Mobile app for on-property check-ins.
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.unicornsrateme.employee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  RateMe App
                </a>{" "}
                – Performance review mobile app.
              </li>
              <li>
                <a
                  href="https://www.notess.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Notess (React Native)
                </a>{" "}
                – Personal note-taking & productivity app.
              </li>
              <li>iConcile – Aircraft management app.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              💻 Web App Development
            </h3>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <a
                  href="https://www.rateme.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  RateMe Web App
                </a>{" "}
                – Web version of the review platform.
              </li>
              <li>
                <a
                  href="https://www.appraisal360.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Appraisal 360 AI
                </a>{" "}
                – AI-driven employee evaluation platform.
              </li>
              <li>
                <a
                  href="https://atithi.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Atithi
                </a>{" "}
                – Hotel guest management system.
              </li>
              <li>
                <a
                  href="https://www.sonavanelegal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Sonavane Legal Associates
                </a>{" "}
                – Law firm website.
              </li>
            </ul>
          </div>
        </div>

        {/* Personality */}
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I enjoy leading and building projects from scratch, owning full
          responsibility, and ensuring high performance, accessibility, and user
          experience — whether working solo or in a team.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          I regularly share my learnings on <strong>Medium</strong> and my
          personal blog. I also post tech thoughts and insights on platforms
          like LinkedIn, Instagram, and Twitter.
        </p>
      </div>
    </section>
  );
}
