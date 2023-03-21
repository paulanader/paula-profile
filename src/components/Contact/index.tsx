import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Config from "../../Config";
import { ContactCard } from "../ContactCard";
import { Title } from "../Title";

export const Contact = () => {
  return (
    <section id="contact" className="mt-5">
      <Title title="Contact" />
      <div className="d-flex justify-content-center">
        <div>
          <ContactCard icon={<AiOutlineMail />} label="paulampaan@gmail.com" />
          <ContactCard
            icon={<AiOutlineWhatsApp />}
            label="+55 (42) 99836-8248"
            route={Config.social.whatsapp}
          />
          <ContactCard
            icon={<AiFillLinkedin />}
            label="https://www.linkedin.com/in/paulanader/"
            route={Config.social.linkedin}
          />
          <ContactCard
            icon={<AiOutlineGithub />}
            label="https://github.com/paulanader"
            route={Config.social.github}
          />
        </div>
      </div>
    </section>
  );
};
