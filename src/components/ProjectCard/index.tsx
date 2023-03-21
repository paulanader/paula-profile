import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Cover } from "./styles";

interface ProjectCardProps {
  image?: string;
  title?: string;
  route: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  route,
}) => {
  return (
    <Card>
      <Cover className="rounded" style={{ backgroundImage: `url(${image})` }} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Link to={route} className="stretched-link" target="_blank" />
      </Card.Body>
    </Card>
  );
};
