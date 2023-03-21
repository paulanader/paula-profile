import { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import Config from "../../Config";
import { SocialMedia } from "../SocialMedia";
import {
  Alignment,
  ContentCard,
  Span,
  SubTitle,
  Title,
  UnderLine,
} from "./styles";

const PerfilCard = () => {
  return (
    <ContentCard className="d-flex flex-column">
      <div style={{ marginBottom: "10%" }}>
        <Title>Paula Nader</Title>
        <UnderLine />
      </div>
      <SubTitle className="d-flex text-center align-self-center">
        Front-end
        <br /> developer
      </SubTitle>
      <div className="mt-auto mb-3">
        <Span>Florianópolis, Santa Catarina, Brazil</Span>
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
                title="Github"
              />
            </div>
          )}
        </Alignment>
      </div>
    </ContentCard>
  );
};

export default memo(PerfilCard);
