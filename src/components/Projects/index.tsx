import { Col, Row } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import { Title } from "../Title";
import PokemonImage from "../../assets/Pokemon.jpeg";
import MarvelImage from "../../assets/Marvel.jpeg";
import VehicleImage from "../../assets/Vehicle.jpeg";
import MaricaImage from "../../assets/Marica.jpeg";
import StarWarsImage from "../../assets/StarWars.jpeg";
import GiuliannaImage from "../../assets/Adv.jpeg";

export const Projects = () => {
  return (
    <section id="projects" className="mt-5">
      <Title title="Projects" />
      <Row className="g-4 justify-content-center">
        <Col md={6}>
          <ProjectCard
            image={StarWarsImage}
            title="Star wars api"
            route="https://paulanader-space-motors.netlify.app/"
          />
        </Col>
        <Col md={6}>
          <ProjectCard
            image={PokemonImage}
            title="Pokemon API"
            route="https://paulanader-pokemon.netlify.app/"
          />
        </Col>
        <Col md={6}>
          <ProjectCard
            image={MarvelImage}
            title="Marvel API"
            route="https://paulanader-marvel.netlify.app/"
          />
        </Col>
        <Col md={6}>
          <ProjectCard
            image={MaricaImage}
            title="Marica api"
            route="https://paulanader-marica.netlify.app/"
          />
        </Col>
        <Col md={6}>
          <ProjectCard
            image={VehicleImage}
            title="Vehicle registration"
            route="https://paulanader-vehicles-registration.netlify.app/"
          />
        </Col>

        <Col md={6}>
          <ProjectCard
            image={GiuliannaImage}
            title="Giulianna Advocacia"
            route="https://giulianna-andrade-advocacia.netlify.app/"
          />
        </Col>
      </Row>
    </section>
  );
};
