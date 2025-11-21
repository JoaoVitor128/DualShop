import './cart.css'

import { useEffect } from 'react'

import { useFetch } from '../hook/useFetch'
const url = "http://localhost:3000/products"

import { useContext, useState } from "react"
import { CartContext } from '../context/cartContext'
import { MenuContext } from '../context/menuContext'

const Cart = () => {
    const [cartState, cartDispatch] = useContext(CartContext)
    const [menuState, menuDispatch] = useContext(MenuContext)

    const { data: products, httpConfig, loading, error } = useFetch(url)



    return (
        <div>
            <button className={`cart`} onClick={()=> menuDispatch({type: "GO_TO_MENU"})}>
                Carrinho
                {cartState.itensCounter > 0 &&
                    <>
                        <span className="cartCounter visible">{cartState.itensCounter}</span>
                    </>}
            </button>
        </div>
    )
}

export default Cart