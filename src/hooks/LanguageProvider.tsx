/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { createContext, useContext, useMemo, useState } from "react";

interface ILanguageContextProp {
  language: "PT" | "EN";
  isLoading: boolean;
  getLanguage: (language: "PT" | "EN") => void;
}

interface ILanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext<ILanguageContextProp>(
  {} as ILanguageContextProp
);

export const useLanguage = (): ILanguageContextProp => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be within LanguageProvider");
  }

  return context;
};

export const LanguageProvider: React.FC<ILanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"PT" | "EN">("PT");

  const [isLoading, setIsLoading] = useState(false);

  const getLanguage = async (language: "PT" | "EN") => {
    setIsLoading(true);

    try {
      if (language === "PT") {
        setLanguage("PT");
      } else {
        setLanguage("EN");
      }

      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  const providerValue = useMemo(
    () => ({
      language,
      isLoading,
      getLanguage,
    }),
    [language, isLoading, getLanguage]
  );

  return (
    <LanguageContext.Provider value={providerValue}>
      {children}
    </LanguageContext.Provider>
  );
};
