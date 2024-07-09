import { createContext, ReactNode, useState } from "react";

interface CHildrenProps {
    children: ReactNode
}

interface ThemeContextProps {
    theme: "light-mode" | "dark-mode",
    updateTheme: ( ) => void,
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: "dark-mode", updateTheme: () => { }});

export const ThemeContextProvider = ({ children }: CHildrenProps) => {
    const [ theme, setTheme ] = useState<"light-mode" | "dark-mode">("light-mode");

    const updateTheme = ( ) => {
        if ( theme === "light-mode" ) setTheme("dark-mode");
        else setTheme("light-mode"); 
    }

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            { children }
        </ThemeContext.Provider>    
    )
}