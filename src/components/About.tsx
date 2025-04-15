import wasi from "../assets/wasi.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-slate-900 px-6 py-24 text-center animate-fadeInUp"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg animate-fadeInLeft">
          <img
            src={wasi}
            alt="Wasi Mirza"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-left animate-fadeInRight">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hi, I'm <strong>Wasi Mirza</strong>, a Senior Full Stack Software
            Engineer passionate about crafting high-performance mobile and web
            applications. I bring hands-on experience with technologies like{" "}
            <strong>React Native</strong>, <strong>React.js</strong>, and{" "}
            <strong>Node.js</strong> to create exceptional digital experiences.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I specialize in building robust, scalable systems—whether it's a
            mobile app from scratch or a responsive web platform. I love turning
            ideas into polished, user-friendly products that make a real impact.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond my full-time work, I also take on{" "}
            <strong>freelance projects</strong>, partnering with startups and
            businesses to bring their visions to life with clean, maintainable
            code and thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
}
