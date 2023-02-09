import { Container } from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { HeaderContainer, List } from "./styles";
import { Navbar } from "../Navbar";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <AiOutlineMenu />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <List className="navbar-nav">
                <Navbar value="Home" id="home" />
              </List>
              <List className="navbar-nav">
                <Navbar value="Skills" id="skills" />
              </List>
              <List className="navbar-nav">
                <Navbar value="Experience" id="experience" />
              </List>
              <List className="navbar-nav">
                <Navbar value="Projects" id="projects" />
              </List>
              <List className="navbar-nav">
                <Navbar value="Education" id="education" />
              </List>
              <List className="navbar-nav">
                <Navbar value="About" id="about" />
              </List>
              <List className="navbar-nav">
                <Navbar value="Contact" id="contact" />
              </List>
            </div>
          </div>
        </nav>
      </Container>
    </HeaderContainer>
  );
};
