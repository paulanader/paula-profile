import { memo } from "react";
import { Title } from "./styles";

const Logo = () => (
  <Title
    className="fw-bold d-flex align-items-center"
    to="home"
    spy={true}
    smooth={true}
    offset={-50}
    duration={500}
    value="Home"
  >
    <h1>
      PN<span>.</span>
    </h1>
  </Title>
);

export default memo(Logo);
