import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Container } from "../../components/Container";
import { Education } from "../../components/Education";
import { Experience } from "../../components/Experience";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";
import { Wrapper } from "../../components/Wrapper";

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Container className="mt-5">
        <Perfil />
        <Skills />
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
