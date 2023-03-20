import { Card } from "react-bootstrap";

interface ExperienceCardProps {
  title: string;
  subtitle?: string;
  text?: string;
  period?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  text,
  period,
}) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-itens-center justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="d-lg-none d-flex justify-content-end mb-3">
            {period}
          </Card.Subtitle>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>

        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
