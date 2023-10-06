import {createContext} from "react";

interface Product {
    id: number
    name: string
    price: number
}
interface Cart {
    products: Product[]
    valor_frete?: number

}

const RocketseatCartContext = createContext<Cart>({
    products: [],
    valor_frete: 0,
})

export default RocketseatCartContext