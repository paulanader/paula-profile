import { useLanguage } from "../../hooks/LanguageProvider";
import { Container, Cover, Subtitle, Title } from "./styles";

interface PillCardProps {
  image: string;
  title: string;
}
export const PillCard: React.FC<PillCardProps> = ({ image, title }) => {
  const { language } = useLanguage();

  return (
    <Container className="card">
      <div className="d-flex row row-cols-2 align-items-center">
        <div className="col-5">
          <Cover style={{ backgroundImage: `url(${image})` }} />
        </div>
        <div className="co-7">
          <Title>{title}</Title>
          <Subtitle>+ 2 {language === "US" ? "years" : "anos"}</Subtitle>
        </div>
      </div>
    </Container>
  );
};
