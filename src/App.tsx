import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import BlogsPage from './pages/Blogs';
import ProjectsPage from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/contact';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio/blogs" element={<BlogsPage />} />
        <Route path="portfolio/projects" element={<ProjectsPage />} />
        <Route path="portfolio/about" element={<AboutMe />} />
        <Route path="portfolio/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
