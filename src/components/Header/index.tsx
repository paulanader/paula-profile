import { AiOutlineMenu } from "react-icons/ai";
import { HeaderContainer, List } from "./styles";
import { Navbar } from "../Navbar";
import Logo from "../Logo";
import { Button, Container } from "react-bootstrap";
import { useLanguage } from "../../hooks/LanguageProvider";

export const Header: React.FC = () => {
  const { language, getLanguage } = useLanguage();

  console.log({ language });

  return (
    <HeaderContainer className="py-1">
      <Container>
        <nav className="navbar navbar-expand-lg">
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
              className="collapse navbar-collapse justify-content-between align-items-center"
              id="navbarNav"
            >
              <div className="d-none d-md-flex align-items-center">
                <Logo />
              </div>
              <div className="d-md-flex aling-items-center">
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "EN" ? "Home" : "Início"}
                    id="home"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "EN" ? "Tecnologies" : "Tecnologias"}
                    id="tecnologies"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "EN" ? "Experience" : "Experiência"}
                    id="experience"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "EN" ? "Projects" : "Projetos pessoais"}
                    id="projects"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "EN" ? "Education" : "Educação"}
                    id="education"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "EN" ? "Contact" : "Contato"}
                    id="contact"
                  />
                </List>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Button type="button" onClick={() => getLanguage("PT")}>
                  Português
                </Button>
                <Button type="button" onClick={() => getLanguage("EN")}>
                  Inglês
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </HeaderContainer>
  );
};
