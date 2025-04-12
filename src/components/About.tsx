// src/components/About.tsx
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import wasi from '../assets/wasi.jpeg';
export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-slate-900 px-6 py-24 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 md:mb-0 shadow-lg">
          <img
            src={wasi} // Your profile image here
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Hi, I'm Wasi Mirza, a Senior Full Stack Software Engineer passionate about building high-performance mobile and web applications. I have experience in **React Native**, **React.js**, **Node.js**, and more. I love working on projects that push the boundaries of user experience and technology.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I specialize in **Mobile App Development**, **Web Development**, and building scalable backends. My goal is to deliver innovative solutions that make people's lives easier through technology.
          </p>

        </div>
      </div>
    </section>
  );
}
