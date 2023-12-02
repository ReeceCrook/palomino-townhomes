import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

function DarkMode() {
    function toggleDarkMode() {
        document.querySelector('body').setAttribute('theme', 'dark');
        localStorage.setItem("selectedTheme", "dark")
    }
    function toggleLightMode() {
        document.querySelector('body').setAttribute('theme', 'light');
        localStorage.setItem("selectedTheme", "light")
    }
    
    const selectedTheme = localStorage.getItem("selectedTheme")

    if(selectedTheme === "dark"){
        toggleDarkMode()
    }

    function onChange(e){
        if (e.target.checked) toggleDarkMode();
        else toggleLightMode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                onChange={onChange}
                defaultChecked={selectedTheme === "dark"}
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
