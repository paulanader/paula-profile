import ReactCountryFlag from "react-country-flag";
import { ButtonContainer } from "./styles";

interface CountryButtonProps {
  country: "BR" | "US";
  changeLanguage: (language: "BR" | "US") => void;
}

export const CountryButton: React.FC<CountryButtonProps> = ({
  country,
  changeLanguage,
}) => {
  return (
    <ButtonContainer type="button" onClick={() => changeLanguage(country)}>
      <ReactCountryFlag
        countryCode={country}
        style={{
          fontSize: "2em",
        }}
      />
    </ButtonContainer>
  );
};
