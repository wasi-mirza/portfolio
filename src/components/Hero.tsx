import wasiImage from "../assets/wasi.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
              Hi, I'm <span className="text-blue-600">Wasi Mirza</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              Senior Full Stack Software Engineer passionate about creating
              innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transform hover:scale-105 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fadeInRight">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={wasiImage}
                  alt="Wasi Mirza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg">
                👋 Hello!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
