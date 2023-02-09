import { Alignment, Cover, Span, SubTitle, Title } from "./styles";
import BackgroundImg from "../../assets/fotoPerfil.jpeg";
import { calculateAge } from "../../utils/data";
import Config from "../../Config";
import { SocialMedia } from "../SocialMedia";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

export const Perfil: React.FC = () => {
  const yearsOld = calculateAge(new Date("09/20/1989"));

  return (
    <section id="home" className="mt-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col d-flex">
          <Cover
            style={{ backgroundImage: `url(${BackgroundImg})` }}
            className="rounded"
          />
        </div>
        <div className="col">
          <Title>Paula Nader</Title>
          <SubTitle>Front-end developer</SubTitle>
          <Span>Curitiba, Paraná, Brazil</Span>
          <Span>{yearsOld} years old</Span>
          <Alignment className="d-flex align-items-center text-dark">
            {Config.social.linkedin && (
              <div className="me-2">
                <SocialMedia
                  icon={<GrLinkedin />}
                  link={Config.social.linkedin}
                  title="Instagram"
                />
              </div>
            )}
            {Config.social.whatsapp && (
              <div className="me-2">
                <SocialMedia
                  icon={<FaWhatsapp />}
                  link={Config.social.whatsapp}
                  title="Whatsapp"
                />
              </div>
            )}

            {Config.social.github && (
              <div className="me-2">
                <SocialMedia
                  icon={<GrGithub />}
                  link={Config.social.github}
                  title="Whatsapp"
                />
              </div>
            )}
          </Alignment>
        </div>
      </div>
    </section>
  );
};
