import { Container, Cover, LinkStyle } from "./styles";

interface CardProps {
  image: string;
  companyTitle: string;
  link: string;
  jobTitle: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  companyTitle,
  link,
  jobTitle,
}) => {
  return (
    <Container className="card">
      <Cover style={{ backgroundImage: `url(${image})` }} />
      <div className="card-body">
        <p>{jobTitle}</p>
        <LinkStyle to={link} className="stretched-link">
          {companyTitle}
        </LinkStyle>
      </div>
    </Container>
  );
};
