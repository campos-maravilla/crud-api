import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTeheme] = useState('light')

    const handleTheme = (e) => setTeheme(e.target.value)

    return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>
}