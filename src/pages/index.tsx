import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Layout from '@/Layout/Layout';
import { Section } from '@/styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;
