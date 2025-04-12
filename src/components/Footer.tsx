// src/components/Footer.tsx
import { useRive } from '@rive-app/react-canvas';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const { RiveComponent } = useRive({
    src: '/animations/figure_message_sent.riv',
    autoplay: true,
  });

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">

      {/* Rive Animation */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px]">
            <RiveComponent />
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <form className="space-y-4">
            <input
              className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
              placeholder="Your Message"
              rows={4}
              required
            />
            <button
              type="submit"
              className="btn bg-primary hover:bg-primary-hover text-white w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-12 text-xl">
        <a
          href="https://x.com/WasiMirzaX"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://instagram.com/wasi.mirza.x"
          target="_blank"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/wasi-mirza"
          target="_blank"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/wasi-mirza"
          target="_blank"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@wasi.mirza"
          target="_blank"
          className="hover:text-gray-100 transition"
        >
          <FaMedium />
        </a>
        <a
          href="https://facebook.com/wasi.mirza.75"
          target="_blank"
          className="hover:text-blue-600 transition"
        >
          <FaFacebook />
        </a>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Wasi Mirza. All rights reserved.
      </div>
      </div>
    </footer>
  );
}
