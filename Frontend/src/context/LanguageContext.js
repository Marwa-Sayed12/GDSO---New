import React, { createContext, useState, useEffect } from 'react';
import en from '../translations/en.json';
import ps from '../translations/ps.json';
import dr from '../translations/dr.json';

const translations = { en, ps, dr };

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translationsData, setTranslationsData] = useState(translations[language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslationsData(translations[lang]);

    // Remove previous classes
    document.body.classList.remove('rtl', 'ltr');

    // Apply direction class
    if (lang === 'ps' || lang === 'dr') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.add('ltr');
    }
  };

  // Apply initial class on first render
  useEffect(() => {
    document.body.classList.add('ltr'); // default English
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translations: translationsData, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
