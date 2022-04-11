import Layout from "../components/layout/Layout";
import AboutMe from "../components/sections/about-me/AboutMe";
import Landing from "../components/sections/landing/Landing";
import Projects from "../components/sections/projects/Projects";
import Skills from "../components/sections/skills/Skills";
import ContactMe from "../components/sections/contact-me/ContactMe";
import { useEffect } from "react";

const Index = ()=>{

  useEffect(() => {
    document.title = "Kudzai Jalos";

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

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