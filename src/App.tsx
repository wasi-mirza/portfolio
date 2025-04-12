// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import BlogsPage from './pages/blogs';
import ProjectsPage from './pages/projects';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
