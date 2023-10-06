import React from "react";

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
    return(
        <div>
            <p>Meu segundo componente que recebe props</p>
            <p>O nome recebido na props é {props.name}</p>

        </div>
    )

}

export default SecondComponent