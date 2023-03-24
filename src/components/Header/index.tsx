import { AiOutlineMenu } from "react-icons/ai";
import { HeaderContainer, List } from "./styles";
import { Navbar } from "../Navbar";
import Logo from "../Logo";
import { Container } from "react-bootstrap";
import { useLanguage } from "../../hooks/LanguageProvider";
import { CountryButton } from "../CountryButton";

export const Header: React.FC = () => {
  const { language, getLanguage } = useLanguage();

  return (
    <HeaderContainer>
      <Container className="nav-header">
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
              className="collapse navbar-collapse justify-content-lg-between align-items-center"
              id="navbarNav"
            >
              <div className="d-none d-lg-flex align-items-center">
                <Logo />
              </div>
              <div className="d-lg-flex aling-items-center">
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "US" ? "Home" : "Início"}
                    id="home"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "US" ? "Tecnologies" : "Tecnologias"}
                    id="tecnologies"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "US" ? "Experience" : "Experiência"}
                    id="experience"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "US" ? "Projects" : "Projetos pessoais"}
                    id="projects"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "US" ? "Education" : "Educação"}
                    id="education"
                  />
                </List>
                <List className="navbar-nav d-flex aling-items-center">
                  <Navbar
                    value={language === "US" ? "Contact" : "Contato"}
                    id="contact"
                  />
                </List>
              </div>
              <div className="d-none d-lg-flex align-items-center">
                <CountryButton country={"US"} changeLanguage={getLanguage} />
                <CountryButton country={"BR"} changeLanguage={getLanguage} />
              </div>
            </div>
          </div>
        </nav>
        <div className="d-flex d-lg-none align-items-center">
          <CountryButton country={"US"} changeLanguage={getLanguage} />
          <CountryButton country={"BR"} changeLanguage={getLanguage} />
        </div>
      </Container>
    </HeaderContainer>
  );
};
