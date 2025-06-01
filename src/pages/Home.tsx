import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import LatestBlogs from '../components/LatestBlogs';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LatestBlogs />
      <Testimonials />
    </>
  );
}
