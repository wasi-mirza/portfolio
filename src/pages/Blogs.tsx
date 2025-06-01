import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

export default function BlogsPage() {
    return (
        <section className="px-6 py-24 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12">All Blogs</h1>
    
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog} />
            ))}
          </div>
        </section>
      );
    }
  