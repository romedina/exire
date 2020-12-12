import React, { useState, useContext } from 'react';

const LanguageContext = React.createContext();
const LanguageUpdateContext = React.createContext();

export const useLanguage = () => useContext(LanguageContext);
export const useLanguageUpdate = () => useContext(LanguageUpdateContext);

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const toggleLanguage = () => {
        currentLanguage === 'en' ?
            setCurrentLanguage('es') :
            setCurrentLanguage('en')
    }

    return (
        <LanguageContext.Provider value={currentLanguage} >
            <LanguageUpdateContext.Provider value={toggleLanguage}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )
}