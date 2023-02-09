import { Title } from "../Title";
import { Cover } from "./styles";
import FotoPerfilImg from "../../assets/fotoPerfil.jpeg";
import Foto6Img from "../../assets/foto6.jpeg";
import Foto3Img from "../../assets/foto3.jpeg";

export const About = () => {
  return (
    <section id="about" className="mt-5">
      <Title title="About" />
      <div className="row row-cols-2">
        <Cover
          className="col"
          style={{ backgroundImage: `url(${FotoPerfilImg})` }}
        />
        <div className="col">
          <p>Escrever sobre mim</p>
        </div>
      </div>
      <div className="row row-cols-2">
        <div className="col">
          <p>Escrever sobre mim</p>
        </div>
        <Cover
          className="col"
          style={{ backgroundImage: `url(${Foto6Img})` }}
        />
      </div>
      <div className="row row-cols-2">
        <Cover
          className="col"
          style={{ backgroundImage: `url(${Foto3Img})` }}
        />
        <div className="col">
          <p>Escrever sobre mim</p>
        </div>
      </div>
    </section>
  );
};
