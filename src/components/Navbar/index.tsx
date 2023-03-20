import { useState } from "react";
import { Title, UnderLine } from "./styles";

interface INavProp {
  value: string;
  id: string;
}

export const Navbar: React.FC<INavProp> = ({ value, id }) => {
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState(false);
  const closeMenu = () => setClick(!click);
  return (
    <li
      className={`nav-item me-3 py-1 ${selected === true ? "selected" : ""}`}
      onClick={() => setSelected(true)}
    >
      <UnderLine
        to={id}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={closeMenu}
        title={value}
      >
        <Title>{value}</Title>
      </UnderLine>
    </li>
  );
};
