import React, { useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";

const FloatingLanguageButton = () => {
  const { selectedCountry, currentLanguage, changeCountry } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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

  const getLanguageName = (lang) => {
    const names = {
      english: "EN",
      arabic: "ع",
      french: "FR",
      russian: "RU",
      indonesian: "ID",
      malay: "MY",
    };
    return names[lang] || "EN";
  };

  return (
    <div className="fixed bottom-20 left-6 z-50 sm:bottom-6">
      <div className="relative">
        {/* Main Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Change Language / تغيير اللغة"
        >
          <div className="flex flex-col items-center">
            <span className="text-lg leading-none">
              {getCountryFlag(selectedCountry)}
            </span>
            <span className="text-xs font-bold leading-none mt-0.5">
              {getLanguageName(currentLanguage)}
            </span>
          </div>
        </button>

        {/* Quick Change Button */}
        {isOpen && (
          <button
            onClick={() => {
              changeCountry();
              setIsOpen(false);
            }}
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center shadow-lg"
            title="Quick Change"
          >
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        )}

        {/* Tooltip */}
        {isOpen && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap">
            Click to change language
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingLanguageButton;
