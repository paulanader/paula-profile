import { EducationCard } from "../EducationCard";
import { Title } from "../Title";
import UerjImg from "../../assets/uerj.jpeg";
import RocketseatImg from "../../assets/rocketseat.png";

export const Education = () => {
  return (
    <section id="education" className="mt-5">
      <Title title="Education" />
      <div className="row row-cols-1 g-4">
        <div className="col">
          <EducationCard
            image={RocketseatImg}
            school="Rocketseat"
            course="Ignite"
            date="2020 - 2021"
          />
        </div>
        <div className="col">
          <EducationCard
            image={UerjImg}
            school="State of Rio de Janeiro University"
            course="Mester degree in Mechanical engineer"
            date="Sept 2014 - Dez 2016"
            project="Numerical Simulation of the Heat Conductivity Process in a Rigid Body with Phase Change"
          />
        </div>
        <div className="col">
          <EducationCard
            image={UerjImg}
            school="State of Rio de Janeiro University"
            course="Mechanical engineer"
            date="Sept 2009 - Dez 2013"
          />
        </div>
      </div>
    </section>
  );
};
