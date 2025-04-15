import { useState } from "react";
import { testimonials } from "../data/testimonials";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const { name, role, quote } = testimonials[index];

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

        <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 mb-6 transition-all duration-500 ease-in-out min-h-[120px]">
          "{quote}"
        </p>

        <div className="text-primary text-lg font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>

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
