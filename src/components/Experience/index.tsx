import { Title } from "../Title";
import { Col, Row } from "react-bootstrap";
import ExperienceCard from "../ExperienceCard";
import TimelineCard from "../TimelineCard";
import { Border } from "./styles";

export const Experience = () => {
  return (
    <section id="experience" className="mt-5">
      <Title title="Experience" />
      <Row xs={1} lg={2} className="d-flex align-items-center">
        <Border className="py-5">
          <ExperienceCard
            title="Desenvolvedora front-end"
            subtitle="Jornada do Dev"
            text="Apuração de resultados e consolidação indicadores de performance.
              Elaboração de ações para melhoria da gestão financeira e dos resultados da empresa. Gestão do orçamento anual
              Gestão de inventário
              Gestão de contas a pagar e a receber
              Suporte fiscal ao time comercial e de operações
              Interface com a logística e time de vendas"
            period="2022 - 2023"
          />
        </Border>
        <Col className="d-sm-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>

        <Border className="py-5">
          <ExperienceCard
            title="Desenvolvedora front-end"
            subtitle="5 Labs"
            text="Apuração de resultados e consolidação indicadores de performance.
              Elaboração de ações para melhoria da gestão financeira e dos resultados da empresa. Gestão do orçamento anual
              Gestão de inventário
              Gestão de contas a pagar e a receber
              Suporte fiscal ao time comercial e de operações
              Interface com a logística e time de vendas"
            period="fev, 2022 - ago, 2022"
          />
        </Border>
        <Col className="d-sm-none d-lg-flex">
          <TimelineCard period="feb, 2022 - ago, 2022" />
        </Col>

        <Border className="py-5">
          <ExperienceCard
            title="Supervisora financeira"
            subtitle="Ambev"
            text="Apuração de resultados e consolidação indicadores de performance.
              Elaboração de ações para melhoria da gestão financeira e dos resultados da empresa. Gestão do orçamento anual
              Gestão de inventário
              Gestão de contas a pagar e a receber
              Suporte fiscal ao time comercial e de operações
              Interface com a logística e time de vendas"
            period="2018 - 2022"
          />
        </Border>
        <Col className="d-sm-none d-lg-flex">
          <TimelineCard period="2018 - 2022" />
        </Col>
      </Row>
      {/* <div className="row row-cols-1 row-cols-md-2 g-5 d-flex align-items-center">
        <div className="col d-flex align-items-center">
          <Card />
        </div>
        <div className="col d-flex align-items-center">
          <span>Agosto 2022</span>
        </div>
        <div className="col d-flex align-items-center">
          <span>5Labs</span>
        </div>
        <div className="col d-flex align-items-center">
          <span>Fevereiro 2022</span>
        </div>

        <div className="col d-flex align-items-center">
          <span>Autônomo</span>
        </div>
        <div className="col d-flex align-items-center">
          <span>Fevereiro 2022</span>
        </div>
        <div className="col d-flex align-items-center">
          <span>Ambev</span>
        </div>
        <div className="col d-flex align-items-center">
          <span>Fevereiro 2022</span>
        </div>
      </div> */}
    </section>
  );
};
