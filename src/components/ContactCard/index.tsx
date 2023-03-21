import { ReactElement } from "react";
import { Container, LinkCard, Title } from "./styles";

interface ContactCardProps {
  icon: ReactElement;
  label: string;
  route?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  label,
  route,
}) => {
  return (
    <Container className="card w-100 p-3 mb-4">
      {route && (
        <LinkCard
          className="d-flex align-items-center gap-2"
          to={route}
          target="_blank"
        >
          {icon}
          <Title className="align-items-center d-flex">{label}</Title>
        </LinkCard>
      )}
      {!route && (
        <div className="d-flex align-items-center gap-2">
          {icon}
          <Title className="align-items-center d-flex">{label}</Title>
        </div>
      )}
    </Container>
  );
};
