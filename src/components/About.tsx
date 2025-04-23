import wasiVideo from "../assets/videos/wasi3d.mp4";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-6 py-24 text-center animate-fadeInUp"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* About Text */}
        <div className="flex-1 text-left animate-fadeInRight">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hi, I'm <strong className="text-primary">Wasi Mirza</strong>, a Senior Full Stack Software
            Engineer passionate about crafting high-performance mobile and web
            applications. I bring hands-on experience with technologies like{" "}
            <strong className="text-primary">React Native</strong>, <strong className="text-primary">React.js</strong>, and{" "}
            <strong className="text-primary">Node.js</strong> to create exceptional digital experiences.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I specialize in building robust, scalable systems—whether it's a
            mobile app from scratch or a responsive web platform. I love turning
            ideas into polished, user-friendly products that make a real impact.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond my full-time work, I also take on{" "}
            <strong className="text-primary">freelance projects</strong>, partnering with startups and
            businesses to bring their visions to life with clean, maintainable
            code and thoughtful design.
          </p>
        </div>

        {/* Profile Video */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl animate-fadeInLeft group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <video 
            src={wasiVideo} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </section>
  );
}
