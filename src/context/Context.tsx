import React, {useContext} from "react";
import {AppContext} from "../App";

export const Context: React.FC = () => {

    const details = useContext(AppContext)
    return (
        <>
            <p>Imprimindo AppContext language: {details?.language}</p>
            <p>Imprimindo AppContext framework: {details?.framework}</p>
            <p>Imprimindo AppContext projects: {details?.projects}</p>

        </>
    );
};