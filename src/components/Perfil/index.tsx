import { Cover, PersonalCard } from "./styles";
import BackgroundImg from "../../assets/fotoPerfil.jpeg";
import PerfilCard from "../PerfilCard";
import { Col, Container, Row } from "react-bootstrap";

export const Perfil: React.FC = () => {
  return (
    <PersonalCard id="home">
      <Container>
        <Row xs={1} md={2} className="p-0">
          <Col className="d-flex p-0">
            <PerfilCard />
          </Col>
          <Col className="p-0">
            <Cover style={{ backgroundImage: `url(${BackgroundImg})` }} />
          </Col>
        </Row>
      </Container>
    </PersonalCard>
  );
};
