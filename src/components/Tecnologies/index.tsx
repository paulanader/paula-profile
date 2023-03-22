import HtmlImg from "../../assets/html5.webp";
import JavascriptImg from "../../assets/javascript.png";
import CssImg from "../../assets/css.png";
import ReactImg from "../../assets/react.svg";
import JestImg from "../../assets/jest.png";
import GitImg from "../../assets/git.png";
import GitHubImg from "../../assets/gitHub.jpeg";
import TypescriptImg from "../../assets/typescript.jpeg";
import ApiRestImg from "../../assets/api.png";
import FigmaImg from "../../assets/figma.png";
import { Title } from "../Title";
import { PillCard } from "../PillCard";
import { Col, Row } from "react-bootstrap";
import { useLanguage } from "../../hooks/LanguageProvider";

export const Tecnologies = () => {
  const { language } = useLanguage();

  return (
    <section id="tecnologies" className="mt-5">
      <Title title={language === "US" ? "Tecnologies" : "Tecnologias"} />
      <h3 className="d-flex justify-content-center mb-5">Front-end</h3>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="justify-content-center g-4 justify-content-center mb-3"
      >
        <Col>
          <PillCard image={HtmlImg} title="HTML" />
        </Col>
        <Col>
          <PillCard image={JavascriptImg} title="Javascript" />
        </Col>
        <Col>
          <PillCard image={CssImg} title="CSS" />
        </Col>
        <Col>
          <PillCard image={ReactImg} title="React" />
        </Col>
        <Col>
          <PillCard image={TypescriptImg} title="Typescript" />
        </Col>
        <Col>
          <PillCard image={ApiRestImg} title="Api Rest" />
        </Col>
        <Col>
          <PillCard image={JestImg} title="Jest" />
        </Col>
      </Row>
      <h3 className="d-flex justify-content-center mb-5">
        {language === "US" ? "Others" : "Outros"}
      </h3>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="justify-content-center g-4 justify-content-center mb-3"
      >
        <Col>
          <PillCard image={GitImg} title="Git" />
        </Col>
        <Col>
          <PillCard image={GitHubImg} title="GitHub" />
        </Col>
        <Col>
          <PillCard image={FigmaImg} title="Figma" />
        </Col>
      </Row>
    </section>
  );
};
