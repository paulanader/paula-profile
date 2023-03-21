import { Card } from "react-bootstrap";
import { CardContent, ContainerCard } from "./styles";

interface TimelineCardProps {
  period: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ period }) => {
  return (
    <ContainerCard className="rounded">
      <CardContent className="text-white fw-bold">
        <Card.Body className="border-none">
          <Card.Text className="d-flex justify-content-center">
            {period}
          </Card.Text>
        </Card.Body>
      </CardContent>
    </ContainerCard>
  );
};

export default TimelineCard;
