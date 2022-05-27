import React, { ReactNode, useState } from "react";

type ThemeType = {
    themeName: string;
    backgroundColor: string;
    foregroundcolor: string;
}
const themes: ThemeType[] =
    [{ themeName: 'dark', backgroundColor: 'gray', foregroundcolor: 'white' },
    { themeName: 'light', backgroundColor: 'white', foregroundcolor: 'black' }]
type ThemeContextType = {
    currentTheme: ThemeType;
    toggleTheme: () => void
}
export const ThemeContext = React.createContext<ThemeContextType>({ currentTheme: themes[0], toggleTheme: () => { } });

export const ThemeProvider: React.FunctionComponent<{
    currentTheme: ThemeType;
    children: ReactNode
}> = ({ currentTheme, children }) => {
    const [theme, setTheme] = useState<ThemeType>(currentTheme);
    const toggleTheme = () => {

        setTheme(theme.themeName == 'dark' ? themes[1] : themes[0]);
    }
    const defaultValue = {
        currentTheme: theme,
        toggleTheme: toggleTheme
    }
    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
};