// src/components/LatestBlogs.tsx
import { Link } from "react-router-dom"; // or use <a> if using Next.js or anchor routing
import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";
export default function LatestBlogs() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
        Latest Blogs
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {blogs.slice(0, 3).map((blog, i) => (
          <BlogCard key={i} {...blog} />
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
