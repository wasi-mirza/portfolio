// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import BlogsPage from './pages/blogs';
import ProjectsPage from './pages/projects';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/aboutMe';
import ContactPage from './pages/contact';
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
