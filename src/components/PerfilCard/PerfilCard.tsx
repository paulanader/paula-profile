import { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import Config from "../../Config";
import { useLanguage } from "../../hooks/LanguageProvider";
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
  const { language } = useLanguage();
  const country = language === "US" ? "Brazil" : "Brasil";

  return (
    <ContentCard className="d-flex flex-column">
      <div style={{ marginBottom: "10%" }}>
        <Title>Paula Nader</Title>
        <UnderLine />
      </div>
      {language === "US" ? (
        <div className="d-flex h-100 align-items-center justify-content-center text-center w-100">
          <SubTitle className="d-flex text-center align-self-center">
            Front-end
            <br /> developer
          </SubTitle>
        </div>
      ) : (
        <div className="d-flex h-100 align-items-center justify-content-center text-center w-100">
          <SubTitle className="text-center">
            Desenvolvedora
            <br /> front-end
          </SubTitle>
        </div>
      )}
      <div className="mt-auto mb-3">
        <Span>Florianópolis, Santa Catarina, {country}</Span>
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
