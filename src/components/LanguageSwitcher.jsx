import {Globe} from "lucide-react";
import React from "react";
import useTranslation from "../context/useTranslation.js";

const LanguageSwitcher = () => {
    const { lang, setLang } = useTranslation();

    return (
        <div className="flex items-center gap-2 bg-gray-800 rounded-full p-1 border border-gray-700">
            <Globe size={16} className="text-gray-400 ml-2" />
            <div className="flex">
                {['ru', 'en', 'es'].map((code) => (
                    <button
                        key={code}
                        onClick={() => setLang(code)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all uppercase ${
                            lang === code
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {code}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;