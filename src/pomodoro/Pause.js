import React from "react";

//Used in HiddenSections.js
export default function Pause({ isTimerRunning }) {
    if (!isTimerRunning) {
        return (
        <>
            <h3>Paused</h3>
        </>
    ) 
    } else {
        return null;
    }
    
}