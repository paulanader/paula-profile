import { TitleStyle } from "./styles";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleStyle className="mb-5">
      <h1 className="ms-2">{title}</h1>
    </TitleStyle>
  );
};
