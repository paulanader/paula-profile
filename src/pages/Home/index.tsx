import { Container } from "react-bootstrap";
import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Education } from "../../components/Education";
import { Experience } from "../../components/Experience";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { Projects } from "../../components/Projects";
import { Tecnologies } from "../../components/Tecnologies";
import { Wrapper } from "../../components/Wrapper";

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Perfil />
      <Container>
        <Tecnologies />
        <Experience />
        <Projects />
        <Education />
        <About />
        <Contact />
      </Container>
      <Footer />
    </Wrapper>
  );
};
