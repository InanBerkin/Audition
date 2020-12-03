import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translationEN.json";
import translationTR from "./translationTR.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tr",
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;
