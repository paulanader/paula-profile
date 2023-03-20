import { Card } from "react-bootstrap";
import { ContainerCard } from "./styles";

interface TimelineCardProps {
  period: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ period }) => {
  return (
    <ContainerCard>
      <Card>
        <Card.Body>
          <Card.Text className="d-flex justify-content-center">
            {period}
          </Card.Text>
        </Card.Body>
      </Card>
    </ContainerCard>
  );
};

export default TimelineCard;
