import React from 'react'

import { useContext, useState } from "react"
import { CartContext } from '../context/cartContext'

import { useFetch } from '../hook/useFetch'
const url = "http://localhost:3000/products"

const AddProduct = (productId) => {
    const [cartState, dispatch] = useContext(CartContext)
    const { data: products, httpConfig, loading, error } = useFetch(url)

    return (
        <div>
            <button onClick={()=> {
                dispatch({type: "ADD_PRODUCT", payload: {productId, products}})}}>Adicionar ao carrinho</button>
        </div>
    )
}

export default AddProduct