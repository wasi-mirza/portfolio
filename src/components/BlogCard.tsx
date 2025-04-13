type BlogCardProps = {
  title: string;
  image: string;
  link: string;
  date: string;
  summary: string;
};

export default function BlogCard({
  title,
  image,
  link,
  date,
  summary,
}: BlogCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
          {summary}
        </p>
        <span className="text-primary mt-3 inline-block text-sm font-medium">
          Read more →
        </span>
      </div>
    </a>
  );
}
