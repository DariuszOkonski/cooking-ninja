import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {    
    const [color, setColor] = useState('blue');

    return (
        <ThemeContext.Provider value={{ color }}>
            { children }
        </ThemeContext.Provider>
    );
}