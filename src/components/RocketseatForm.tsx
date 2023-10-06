import React from "react";

export const RocketseatForm: React.FC = () => {
    
    const submit = () => {
        alert('Submit RocketseatForm')
    }
    
    return (
        <>
            <form action=''>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
            </form>
            
        </>
    );
};
