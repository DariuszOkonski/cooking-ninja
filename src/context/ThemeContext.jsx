import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {    
    const [color, setColor] = useState('green');

    return (
        <ThemeContext.Provider value={{ color }}>
            { children }
        </ThemeContext.Provider>
    );
}