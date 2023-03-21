import { EducationCard } from "../EducationCard";
import { Title } from "../Title";
import UerjImg from "../../assets/uerj.jpeg";
import RocketseatImg from "../../assets/rocketseat.png";
import { Col, Row } from "react-bootstrap";
import TimelineCard from "../TimelineCard";
import { Border } from "./styles";

export const Education = () => {
  return (
    <section id="education" className="mt-5">
      <Title title="Education" />
      <Row xs={1} lg={2} className="d-flex align-items-center">
        <Border className="py-5">
          <EducationCard
            image={RocketseatImg}
            school="Rocketseat"
            course="Ignite"
            date="2020 - 2021"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>
        <Border className="py-5">
          <EducationCard
            image={UerjImg}
            school="State of Rio de Janeiro University"
            course="Mester degree in Mechanical engineer"
            date="Sept 2014 - Dez 2016"
            project="Numerical Simulation of the Heat Conductivity Process in a Rigid Body with Phase Change"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>
        <Border className="py-5">
          <EducationCard
            image={UerjImg}
            school="State of Rio de Janeiro University"
            course="Mechanical engineer"
            date="Sept 2009 - Dez 2013"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>
      </Row>
    </section>
  );
};
