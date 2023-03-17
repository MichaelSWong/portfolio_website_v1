import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Layout from '@/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
