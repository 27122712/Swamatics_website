import React, { useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";

const LanguageSwitcher = () => {
  const { selectedCountry, currentLanguage, changeCountry, t } =
    useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const getLanguageName = (lang) => {
    const names = {
      english: "English",
      arabic: "العربية",
      french: "Français",
      russian: "Русский",
      indonesian: "Bahasa Indonesia",
      malay: "Bahasa Melayu",
    };
    return names[lang] || "English";
  };

  const getCountryFlag = (country) => {
    const flags = {
      Europe: "🇪🇺",
      UK: "🇬🇧",
      US: "🇺🇸",
      France: "🇫🇷",
      Bahrain: "🇧🇭",
      Egypt: "🇪🇬",
      Jordan: "🇯🇴",
      Kuwait: "🇰🇼",
      Lebanon: "🇱🇧",
      Oman: "🇴🇲",
      Qatar: "🇶🇦",
      "Saudi Arabia": "🇸🇦",
      "United Arab Emirates": "🇦🇪",
      Australia: "🇦🇺",
      "New Zealand": "🇳🇿",
      Russia: "🇷🇺",
      Indonesia: "🇮🇩",
      Malaysia: "🇲🇾",
    };
    return flags[country] || "🌍";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
      >
        <span className="text-lg">{getCountryFlag(selectedCountry)}</span>
        <span className="text-sm font-medium">
          {getLanguageName(currentLanguage)}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs text-gray-500 font-medium">
              Current Selection
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {getCountryFlag(selectedCountry)} {selectedCountry}
            </p>
            <p className="text-xs text-gray-600">
              {getLanguageName(currentLanguage)}
            </p>
          </div>
          <button
            onClick={() => {
              changeCountry();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              <span>Change Country</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
