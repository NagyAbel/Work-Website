import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./translations/en.json";
import hu from "./translations/hu.json";
import ro from "./translations/ro.json";

i18n
  .use(LanguageDetector) // 1. Add detector plugin here
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      hu: {
        translation: hu
      },
      ro: {
        translation: ro
      }
    },
    
    fallbackLng: "en",
    supportedLngs: ["en", "hu", "ro"], // 2. Maps regional codes like "hu-HU" or "ro-RO" down to "hu" and "ro"

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"] // Remembers user clicks from your LanguageSwitcher
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;