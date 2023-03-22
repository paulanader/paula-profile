import { EducationCard } from "../EducationCard";
import { Title } from "../Title";
import UerjImg from "../../assets/uerj.jpeg";
import RocketseatImg from "../../assets/rocketseat.png";
import { Col, Row } from "react-bootstrap";
import TimelineCard from "../TimelineCard";
import { Border } from "./styles";
import { useLanguage } from "../../hooks/LanguageProvider";

export const Education = () => {
  const { language } = useLanguage();

  return (
    <section id="education" className="mt-5">
      <Title title={language === "US" ? "Education" : "Educação"} />
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
            school={
              language === "US"
                ? "State of Rio de Janeiro University"
                : "Universidade do Estado do Rio de Janeiro"
            }
            course={
              language === "US"
                ? "Mester degree in Mechanical engineer"
                : "Mestrado em Engenharia Mecânica"
            }
            date={
              language === "US" ? "Sept 2014 - Dez 2016" : "Set 2014 - Dez 2016"
            }
            project={
              language === "US"
                ? "Numerical Simulation of the Heat Conductivity Process in a Rigid Body with Phase Change"
                : "Simulação Numérica do Processo de Condutividade Térmica em um Corpo Rígido com Mudança de Fase"
            }
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>
        <Border className="py-5">
          <EducationCard
            image={UerjImg}
            school={
              language === "US"
                ? "State of Rio de Janeiro University"
                : "Universidade do Estado do Rio de Janeiro"
            }
            course={
              language === "US" ? "Mechanical engineer" : "Engenharia mecânica"
            }
            date={
              language === "US" ? "Sept 2009 - Dez 2013" : "Set 2009 - Dez 2013"
            }
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>
      </Row>
    </section>
  );
};
