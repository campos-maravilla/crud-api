import React from 'react'
import { ThemeContext as TemaContext } from "../context/ThemeContext"
import { useContext } from "react";
const ThemeContext = () => {
    const { theme } = useContext(TemaContext)
    return (
        <div className={theme} >
            <h2>ThemeContext</h2>
        </div>
    )
}

export default ThemeContext