import React, { useContext } from 'react';
import './ToggleButton.css';
import {ThemeContext} from '../Context/ThemeContext'

export default function ToggleButton() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    

    return (
        <div onClick={toggleTheme}
        className={theme ? "toggle-button goLight" : "toggle-button goDark"}>
            {theme ? "Dark" : "Light"}
        </div>
    )
}
