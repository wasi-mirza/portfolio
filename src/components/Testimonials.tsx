import { useState, useEffect, useCallback } from "react";
import { testimonials } from "../data/testimonials";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const total = testimonials.length;

  const next = useCallback(() => setIndex((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + total) % total), [total]);

  const { name, role, quote } = testimonials[index];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " ") setIsAutoPlaying((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 px-6 py-24 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
        What People Say
      </h2>

      <div className="relative max-w-3xl mx-auto p-10 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-white/10">
        <FaQuoteLeft className="text-primary text-3xl mb-6 mx-auto" />

        <div className="relative min-h-[120px]">
          <p 
            className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 mb-6 transition-all duration-500 ease-in-out"
            style={{
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            "{quote}"
          </p>
        </div>

        <div className="text-primary text-lg font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary w-4" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Nav Buttons */}
        <div className="absolute left-0 right-0 -bottom-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="bg-white dark:bg-slate-800 hover:bg-primary hover:text-white text-primary border border-primary rounded-full p-3 shadow transition-all duration-300"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className="bg-white dark:bg-slate-800 hover:bg-primary hover:text-white text-primary border border-primary rounded-full p-3 shadow transition-all duration-300"
            aria-label={isAutoPlaying ? "Pause rotation" : "Play rotation"}
          >
            {isAutoPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={next}
            className="bg-white dark:bg-slate-800 hover:bg-primary hover:text-white text-primary border border-primary rounded-full p-3 shadow transition-all duration-300"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
