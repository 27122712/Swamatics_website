import React from "react";
import { useTranslation } from "../contexts/TranslationContext";

const CountrySelectionModal = () => {
  const { showCountryModal, selectCountry, t } = useTranslation();

  const countries = [
    { name: "Europe", flag: "🇪🇺", language: "English" },
    { name: "UK", flag: "🇬🇧", language: "English" },
    { name: "US", flag: "🇺🇸", language: "English" },
    { name: "France", flag: "🇫🇷", language: "French" },
    { name: "Bahrain", flag: "🇧🇭", language: "Arabic" },
    { name: "Egypt", flag: "🇪🇬", language: "Arabic" },
    { name: "Jordan", flag: "🇯🇴", language: "Arabic" },
    { name: "Kuwait", flag: "🇰🇼", language: "Arabic" },
    { name: "Lebanon", flag: "🇱🇧", language: "Arabic" },
    { name: "Oman", flag: "🇴🇲", language: "Arabic" },
    { name: "Qatar", flag: "🇶🇦", language: "Arabic" },
    { name: "Saudi Arabia", flag: "🇸🇦", language: "Arabic" },
    { name: "United Arab Emirates", flag: "🇦🇪", language: "Arabic" },
    { name: "Australia", flag: "🇦🇺", language: "English" },
    { name: "New Zealand", flag: "🇳🇿", language: "English" },
    { name: "Russia", flag: "🇷🇺", language: "Russian" },
    { name: "Indonesia", flag: "🇮🇩", language: "Indonesian" },
    { name: "Malaysia", flag: "🇲🇾", language: "Malay" },
  ];

  if (!showCountryModal) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <h2 className="text-2xl font-bold text-center">
            Select Your Country / اختر بلدك / Choisissez votre pays
          </h2>
          <p className="text-blue-100 text-center mt-2">
            Choose your location to get content in your preferred language
          </p>
        </div>

        {/* Countries Grid */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => selectCountry(country.name)}
                className="group flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left"
              >
                <div className="text-2xl mr-3">{country.flag}</div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">
                    {country.name}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-blue-600">
                    {country.language}
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-blue-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <p className="text-sm text-gray-600 text-center">
            You can change your country selection anytime from the settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountrySelectionModal;
