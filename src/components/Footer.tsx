import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
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
