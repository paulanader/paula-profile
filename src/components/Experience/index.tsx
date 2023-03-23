import { Title } from "../Title";
import { Col, Row } from "react-bootstrap";
import ExperienceCard from "../ExperienceCard";
import TimelineCard from "../TimelineCard";
import { Border, Dots } from "./styles";
import { useLanguage } from "../../hooks/LanguageProvider";

export const Experience = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="mt-5">
      <Title title={language === "US" ? "Experience" : "Experiência"} />
      <Row xs={1} lg={2} className="d-flex align-items-center">
        <Border className="py-5">
          <ExperienceCard
            title={
              language === "US"
                ? "Front-end developer"
                : "Desenvolvedora front-end"
            }
            subtitle="Jornada do Dev"
            text={
              language === "US"
                ? "Implementation of unit and E2E testing for the trade area of the main client and resolution of bugs and code performance improvement. Implementation of new features using technologies such as React.Js, Typescript, Javascript, HTML, CSS, Jest, Styled Components, Hooks, React Context, REST API, AWS, Git, GitHub."
                : "Aplicação de teste unitário e E2E para a área de trade do principal cliente e resolução de bugs e aperfeiçoamento de desempenho do código. Implementação de novas funcionalidades usando as tecnologias: React.Js, Typescript, Javascript, Html, css, Jest, styled component, hooks, react context, api rest, aws, git, gitHub"
            }
            period="2022 - 2023"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2022 - 2023" />
        </Col>

        <Border className="py-5">
          <ExperienceCard
            title={
              language === "US"
                ? "Front-end developer"
                : "Desenvolvedora front-end"
            }
            subtitle="5 Labs"
            text={
              language === "US"
                ? "Bug resolution and code performance improvement. Implementation of new features using technologies such as React.Js, Typescript, Javascript, Html, css, styled component, hooks, react context, rest API, AWS, git, GitHub."
                : "Resolução de bugs e aperfeiçoamento de desempenho do código. Implementação de novas funcionalidades usando as tecnologias: React.Js, Typescript, Javascript, Html, css, styled component, hooks, react context, api rest, aws, git, gitHub"
            }
            period="fev, 2022 - ago, 2022"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard
            period={
              language === "US"
                ? "feb, 2022 - ago, 2022"
                : "fev, 2022 - ago, 2022"
            }
          />
        </Col>

        <Border className="py-5">
          <ExperienceCard
            title={
              language === "US"
                ? "Freelancer Front-End Developer"
                : "Desenvolvedora dront-end autônoma"
            }
            subtitle={language === "US" ? "Freelancer" : "Autônomo"}
            text={
              language === "US"
                ? "Personal front-end projects using React.js, TypeScript, JavaScript, HTML, CSS, styled-components, hooks, React Context, REST APIs, AWS, Git, and GitHub."
                : "Projetos pessoais de front-end usando as tecnologias React.Js, Typescript, Javascript, Html, css, styled component, hooks, react context, api rest, aws, git, gitHub"
            }
            period="2020 - 2022"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2018 - 2022" />
        </Col>

        <Border className="py-5">
          <ExperienceCard
            title={
              language === "US"
                ? "Financial supervisor"
                : "Supervisora financeira"
            }
            subtitle="Ambev"
            text={
              language === "US"
                ? "Results analysis and consolidation of performance indicators. Development of actions to improve financial management and company results. Annual budget management. Inventory management. Management of accounts payable and receivable. Tax support to the sales and operations team. Interface with logistics and sales team."
                : "Apuração de resultados e consolidação indicadores de performance. Elaboração de ações para melhoria da gestão financeira e dos resultados da empresa. Gestão do orçamento anual. Gestão de inventário; Gestão de contas a pagar e a receber; Suporte fiscal ao time comercial e de operações; Interface com a logística e time de vendas"
            }
            period="2018 - 2022"
          />
        </Border>
        <Col className="d-none d-lg-flex">
          <TimelineCard period="2018 - 2022" />
        </Col>
      </Row>
      <div className="d-flex justify-content-sm-start justify-content-lg-center ms-lg-1">
        <Dots />
      </div>
    </section>
  );
};
