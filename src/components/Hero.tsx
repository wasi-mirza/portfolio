// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 to-black text-white px-6 py-24 animate-fadeInUp">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm Wasi Mirza
      </h1>
      <p className="text-lg md:text-2xl text-slate-300 mb-6">
        Senior Full Stack Software Engineer
      </p>
      <div className="flex gap-4">
        <a
          href="/contact"
          className="btn bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition"
        >
          Let’s Talk
        </a>
        <a
          href="/portfolio/Wasi_Mirza_CV.pdf"
          download
          className="btn border border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
