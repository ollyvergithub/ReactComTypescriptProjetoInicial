import React, {useRef, useImperativeHandle} from "react";
import {RocketseatForm} from "./RocketseatForm";

export const StateRocketseatuseImperativeHandle: React.FC = () => {

    const formRef = useRef(null)

    return (
        <>
          <RocketseatForm/>
        </>
    );
};