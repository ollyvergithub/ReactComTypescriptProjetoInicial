import React, {useContext} from "react";
import RocketseatCartContext from "../context/RocketseatCartContext";

export const StateRocketseatUseContext: React.FC = () => {

    const {products} = useContext(RocketseatCartContext)

    return (
        <ul>
            {products?.map((product)=>(
                <li>Produto name: {product.name}</li>
            ))}
            
        </ul>
    );
};