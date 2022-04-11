import Layout from "../components/layout/Layout";
import AboutMe from "../components/sections/about-me/AboutMe";
import Landing from "../components/sections/landing/Landing";
import Projects from "../components/sections/projects/Projects";
import Skills from "../components/sections/skills/Skills";
import ContactMe from "../components/sections/contact-me/ContactMe";

const Index = ()=>{
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
    </Layout>
  );
}

export default Index;