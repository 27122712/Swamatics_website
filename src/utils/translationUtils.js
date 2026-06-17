// Utility functions for dynamic translation of JSON content

export const translateContent = (content, translations, currentLanguage) => {
  if (!content || !translations || !currentLanguage) return content;

  // If content is a string, try to find a translation key
  if (typeof content === "string") {
    // Look for common patterns and try to find matching translation
    const translationKey = findTranslationKey(
      content,
      translations,
      currentLanguage
    );
    return translationKey || content;
  }

  // If content is an object, recursively translate its properties
  if (typeof content === "object" && content !== null) {
    const translatedContent = Array.isArray(content) ? [] : {};

    for (const [key, value] of Object.entries(content)) {
      if (typeof value === "string") {
        const translationKey = findTranslationKey(
          value,
          translations,
          currentLanguage
        );
        translatedContent[key] = translationKey || value;
      } else if (typeof value === "object" && value !== null) {
        translatedContent[key] = translateContent(
          value,
          translations,
          currentLanguage
        );
      } else {
        translatedContent[key] = value;
      }
    }

    return translatedContent;
  }

  return content;
};

// Helper function to find translation key for a given text
const findTranslationKey = (text, translations, currentLanguage) => {
  if (!text || !translations || !currentLanguage) return null;

  // Create a mapping of English text to translation keys
  const englishTranslations = translations.english || {};

  // Find the key that matches the English text
  for (const [key, value] of Object.entries(englishTranslations)) {
    if (value === text) {
      return translations[currentLanguage]?.[key] || value;
    }
  }

  return null;
};

// Function to get translated content with fallback
export const getTranslatedContent = (
  key,
  translations,
  currentLanguage,
  fallback = ""
) => {
  if (!key || !translations || !currentLanguage) return fallback;

  return (
    translations[currentLanguage]?.[key] ||
    translations.english?.[key] ||
    fallback
  );
};

// Function to apply RTL/LTR direction based on language
export const getTextDirection = (language) => {
  const rtlLanguages = ["arabic"];
  return rtlLanguages.includes(language) ? "rtl" : "ltr";
};

// Function to get text alignment based on language
export const getTextAlignment = (language, defaultAlignment = "center") => {
  const rtlLanguages = ["arabic"];
  return rtlLanguages.includes(language) ? "right" : defaultAlignment;
};
