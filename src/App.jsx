import Layout from "./components/layout/Layout";
import AboutMe from "./components/sections/about-me/AboutMe";
import Landing from "./components/sections/landing/Landing";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";
import "./index.css"

function App() {
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
    </Layout>
  );
}

export default App;
