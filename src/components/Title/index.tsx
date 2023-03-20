import { TitleStyle, Underline } from "./styles";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleStyle className="mb-5">
      <h1>{title}</h1>
      <Underline />
    </TitleStyle>
  );
};
