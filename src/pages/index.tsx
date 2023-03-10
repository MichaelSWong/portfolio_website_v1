import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Layout from '@/Layout/Layout';
import { Section } from '@/styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;
