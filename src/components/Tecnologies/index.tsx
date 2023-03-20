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
import SassImg from "../../assets/sass.png";
import { Title } from "../Title";
import { PillCard } from "../PillCard";

export const Tecnologies = () => {
  return (
    <section id="tecnologies" className="mt-5">
      <Title title="Tecnologies" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
        <div className="col">
          <PillCard image={HtmlImg} title="HTML" />
        </div>
        <div className="col">
          <PillCard image={JavascriptImg} title="Javascript" />
        </div>
        <div className="col">
          <PillCard image={CssImg} title="CSS" />
        </div>
        <div className="col">
          <PillCard image={ReactImg} title="React" />
        </div>
        <div className="col">
          <PillCard image={TypescriptImg} title="Typescript" />
        </div>
        <div className="col">
          <PillCard image={ApiRestImg} title="Api Rest" />
        </div>
        <div className="col">
          <PillCard image={JestImg} title="Jest" />
        </div>
        <div className="col">
          <PillCard image={SassImg} title="Sass" />
        </div>
        <div className="col">
          <PillCard image={GitImg} title="Git" />
        </div>
        <div className="col">
          <PillCard image={GitHubImg} title="GitHub" />
        </div>
        <div className="col">
          <PillCard image={FigmaImg} title="Figma" />
        </div>
      </div>
    </section>
  );
};
