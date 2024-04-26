import React from "react";
export const handleChange=(event)=>{
    const{name, value} = event.target
    localStorage.setItem(name,value)
    if (typeof value !== 'string' && typeof value !== 'number') {
        Window.prompt(`Unexpected value type for input named "${name}":`, value);
        return; // Optionally return early to prevent unintended behavior
    }


}