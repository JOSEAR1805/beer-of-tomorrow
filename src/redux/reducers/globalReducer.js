import { types } from "src/types";

const initialState = {
    shoppingCart: []
}

export const globalReducer = (state = initialState, action) => {
    const auxShoppingCart = state.shoppingCart;
    const product = action.payload;

    switch (action.type) {
        case types.addProduct:
            if (auxShoppingCart.length >= 1) {
                const existingCartItem = auxShoppingCart.find((item) => item.id === product.id)
                
                existingCartItem ?
                    auxShoppingCart.map((item) => item.id === product.id && (item.quantity += product.quantity)) :
                    auxShoppingCart.push(product)
            } else {
                auxShoppingCart.push(product)
            }
            return {
                ...state,
                shoppingCart: auxShoppingCart
            }
        case types.editProduct:
            auxShoppingCart.map((item) => item.id === product.id && product )
            return {
                ...state,
                shoppingCart: auxShoppingCart
            }
        case types.deleteProduct:
            const index = auxShoppingCart.indexOf(product)
            auxShoppingCart.splice(index, 1)
            return {
                ...state,
                shoppingCart: auxShoppingCart
            }
        default:
            return state
    }
}