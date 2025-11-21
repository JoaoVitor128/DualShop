import { createContext, useReducer, useEffect } from "react"

const initialStates = {
    cartProducts: [],
    itensCounter: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            let addProduct
            let data = action.payload.products
            let productId = action.payload.productId.productId

            const newProduct = data.find(product => product.id === productId)
            let newItensCounter = state.itensCounter + 1

            addProduct = [...state.cartProducts, newProduct]


            return {
                ...state,
                cartProducts: addProduct,
                itensCounter: newItensCounter
            }

        case "DELETE_PRODUCT":
            let deleteProductId = action.payload.productId
            const deletedProductIndex = state.cartProducts.findIndex(product => product.id === deleteProductId)
            
            if (deletedProductIndex === -1) {
                return state // produto não encontrado
            }
            
            let deleteItensCounter = state.itensCounter - 1
            let newCartProduct = state.cartProducts.filter((_, index) => index !== deletedProductIndex)

            return {
                ...state,
                cartProducts: newCartProduct,
                itensCounter: deleteItensCounter
            }

        default: return state
    }
}
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const value = useReducer(cartReducer, initialStates)
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
} 