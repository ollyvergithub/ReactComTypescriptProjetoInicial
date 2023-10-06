import React, {useReducer} from "react";
interface Cart {
    products: string[],
    valor_frete: 0,
}

export type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}
export const StateRocketseatUseReducer: React.FC = () => {

    const cart = useReducer(
        (state: Cart, action: CartActionType) => {
            switch (action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, "Produto novo"]
                    }
                case 'REMOVE_PRODUCT':
                    return {
                        ...state
                    }
                default:
                    return state
            }
    },
        {
            products: [],
            valor_frete: 0,
        }
    )

    return (
        <>
        </>
    );
};