import React, { useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";

const LanguageChangeIcon = () => {
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
      {/* Language Change Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
        title="Change Language / تغيير اللغة"
      >
        {/* Language Icon */}
        <svg
          className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu */}
          <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50">
            {/* Header */}
            <div className="px-4 py-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <h3 className="text-sm font-semibold text-gray-900">
                  Language Settings
                </h3>
              </div>
            </div>

            {/* Current Selection */}
            <div className="px-4 py-3 bg-blue-50 border-b border-gray-100">
              <p className="text-xs text-gray-500 font-medium mb-1">
                Current Selection
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-lg">
                  {getCountryFlag(selectedCountry)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {selectedCountry}
                  </p>
                  <p className="text-xs text-gray-600">
                    {getLanguageName(currentLanguage)}
                  </p>
                </div>
              </div>
            </div>

            {/* Change Country Button */}
            <button
              onClick={() => {
                changeCountry();
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3"
            >
              <svg
                className="w-5 h-5 text-gray-400"
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
              <div>
                <p className="font-medium">Change Country</p>
                <p className="text-xs text-gray-500">
                  Select a different country/language
                </p>
              </div>
            </button>

            {/* Quick Language Info */}
            <div className="px-4 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Available languages: English, العربية, Français, Русский, Bahasa
                Indonesia, Bahasa Melayu
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageChangeIcon;
