import { articles } from "../data/articles";

  
  export default function Articles() {
    return (
      <section className="p-8 bg-white text-center animate-fadeInUp">
        <h2 className="text-3xl font-bold mb-6">Articles</h2>
        <ul className="space-y-4">
          {articles.map((article, idx) => (
            <li key={idx}>
              <a href={article.link} target="_blank" className="text-blue-600 hover:underline text-lg">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }