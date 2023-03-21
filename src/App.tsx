import { LanguageProvider } from "./hooks/LanguageProvider";
import { PagesRoutes } from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <LanguageProvider>
        <PagesRoutes />
      </LanguageProvider>
    </>
  );
};

export default App;
