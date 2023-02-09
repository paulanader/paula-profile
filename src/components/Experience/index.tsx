import { Card } from "../Card";
import AmbevImg from "../../assets/ambev.jpeg";
import AutonomyImg from "../../assets/autonomy.png";
import FiveLabsImg from "../../assets/fiveLabs.jpeg";
import JornadaDoDevImg from "../../assets/jornadaDoDev.png";
import { Title } from "../Title";

export const Experience = () => {
  return (
    <section id="experience" className="mt-5">
      <Title title="Experience" />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <Card
            image={AmbevImg}
            companyTitle="Ambev"
            link="/"
            jobTitle="Financial supervisor"
          />
        </div>
        <div className="col">
          <Card
            image={AutonomyImg}
            companyTitle="Autonomy"
            link="/"
            jobTitle="Front-end developer"
          />
        </div>
        <div className="col">
          <Card
            image={FiveLabsImg}
            companyTitle="5 Labs"
            link="/"
            jobTitle="Front-end developer"
          />
        </div>
        <div className="col">
          <Card
            image={JornadaDoDevImg}
            companyTitle="Jornada do Dev"
            link="/"
            jobTitle="Front-end developer"
          />
        </div>
      </div>
    </section>
  );
};
