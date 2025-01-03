import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../../../public/launguages/uz.json';
import ruTranslation from '../../../public/launguages/ru.json';
import enTranslation from '../../../public/launguages/en.json';

const language = localStorage.getItem('i18nextLng') || 'uz';

i18n
  .use(Backend)
  // tilni aniqlab beradi
  .use(laungageDetector)
  // bog'lash
  .use(initReactI18next)
  .init({
    fallbacking: 'en',
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    }
  });

export default i18n;


