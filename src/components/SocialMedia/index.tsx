import { ReactElement } from "react";
import { LinkDecoration } from "./styles";

interface ISocialMediaProps {
  icon: ReactElement;
  link: string;
  title: string;
}

export const SocialMedia: React.FC<ISocialMediaProps> = ({
  icon,
  link,
  title,
}) => {
  return (
    <LinkDecoration href={link} target="_blank" title={title}>
      {icon}
    </LinkDecoration>
  );
};
