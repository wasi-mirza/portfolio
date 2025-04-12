export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-primary tracking-tight hover:scale-105 transition-transform">
            Wasi<span className="text-primary-hover">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
          <a
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              About
            </a>
            <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Blogs
            </a>
          </div>

          {/* Mobile menu (future) */}
          <button className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
