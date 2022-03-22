import NavItem from "./NavItem";

const MainNavigation = (props) => {
  return (
    <nav>
      <ul>
        <NavItem>
          <a href="#about-me">About me</a>
        </NavItem>
        <NavItem>
          <a href="#projects">Projects</a>
        </NavItem>
        <NavItem>
          <a href="#skills">Skills</a>
        </NavItem>
        <NavItem>
          <a href="#certifications">Certifications</a>
        </NavItem>
        <NavItem>
          <a href="#contact-me">Contact me</a>
        </NavItem>
      </ul>
    </nav>
  );
};

export default MainNavigation;
