import { blogs } from "../data/blogs";

export default function BlogsPage() {
    return (
        <section className="px-6 py-24 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12">All Blogs</h1>
    
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {blogs.map((blog, i) => (
              <a
                key={i}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{blog.date}</p>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                    {blog.summary}
                  </p>
                  <span className="text-primary mt-3 inline-block text-sm font-medium">
                    Read more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      );
    }
  