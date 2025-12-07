import {useContext} from "react";
import TRANSLATIONS from "../data/translations.js";
import LanguageContext from "./LanguageContext.js";

const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useTranslation must be used within a LanguageProvider');

    const { lang } = context;

    const t = (key) => {
        return TRANSLATIONS[lang][key] || key;
    };

    return { t, lang, setLang: context.setLang };
};

export default useTranslation;