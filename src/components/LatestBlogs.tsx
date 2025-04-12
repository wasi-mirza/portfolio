// src/components/LatestBlogs.tsx
import { Link } from 'react-router-dom'; // or use <a> if using Next.js or anchor routing
import { blogs } from '../data/blogs';

export default function LatestBlogs() {

  return (
    <section id="blogs" className="bg-white dark:bg-slate-900 px-6 py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
        Latest Blogs
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-left">
        {blogs.map((blog, i) => (
          <a
            key={i}
            href={blog.link}
            target="_blank"
            className="group bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition">
                {blog.title}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
                {blog.summary}
              </p>
              <span className="text-primary mt-3 inline-block font-medium">Read more →</span>
            </div>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16">
        <Link
          to="/blogs"
          className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition rounded-lg"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}
