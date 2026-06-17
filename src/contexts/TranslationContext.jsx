import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// Import translations from separate language files
import englishTranslations from "./translations/english";
import arabicTranslations from "./translations/arabic";
import frenchTranslations from "./translations/french";
import russianTranslations from "./translations/russian";
import indonesianTranslations from "./translations/indonesian";
import malayTranslations from "./translations/malay";

const TranslationContext = createContext();

// Country to Language mapping
const countryLanguageMap = {
  Europe: "english",
  UK: "english",
  US: "english",
  France: "french",
  Bahrain: "arabic",
  Egypt: "arabic",
  Jordan: "arabic",
  Kuwait: "arabic",
  Lebanon: "arabic",
  Oman: "arabic",
  Qatar: "arabic",
  "Saudi Arabia": "arabic",
  "United Arab Emirates": "arabic",
  Australia: "english",
  "New Zealand": "english",
  Russia: "russian",
  Indonesia: "indonesian",
  Malaysia: "malay",
};

// Translation data - combined from separate language files
const translations = {
  english: englishTranslations,
  arabic: arabicTranslations,
  french: frenchTranslations,
  russian: russianTranslations,
  indonesian: indonesianTranslations,
  malay: malayTranslations,
};

export const TranslationProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const [showCountryModal, setShowCountryModal] = useState(false);

  // Check if user has already selected a country
  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedCountry && savedLanguage) {
      setSelectedCountry(savedCountry);
      setCurrentLanguage(savedLanguage);
      setShowCountryModal(false);
    } else {
      setShowCountryModal(true);
    }
  }, []);

  const selectCountry = (country) => {
    const language = countryLanguageMap[country];
    setSelectedCountry(country);
    setCurrentLanguage(language);
    setShowCountryModal(false);

    // Save to localStorage
    localStorage.setItem("selectedCountry", country);
    localStorage.setItem("selectedLanguage", language);
  };

  const changeCountry = () => {
    setShowCountryModal(true);
  };

  const t = useCallback(
    (key) => {
      return (
        translations[currentLanguage]?.[key] || translations.english[key] || key
      );
    },
    [currentLanguage]
  );

  const value = useMemo(
    () => ({
      selectedCountry,
      currentLanguage,
      showCountryModal,
      selectCountry,
      changeCountry,
      t,
      countryLanguageMap,
    }),
    [selectedCountry, currentLanguage, showCountryModal, t]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
