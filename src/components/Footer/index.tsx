import Config from "../../Config";
import { ColorFooter, Signature } from "./styles";

const Footer: React.FC = () => {
  return (
    <ColorFooter className="mt-auto text-center">
      <span className="text-white">
        site por{" "}
        <Signature target="_blanc" to={`${Config.social.linkedin}`}>
          Paula Nader
        </Signature>
      </span>
    </ColorFooter>
  );
};

export default Footer;
