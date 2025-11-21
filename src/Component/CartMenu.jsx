import './cartMenu.css'

import { useFetch } from "../hook/useFetch"
const url = "http://localhost:3000/products"

import { useContext, useState } from "react"
import { CartContext } from '../context/cartContext'
import { MenuContext } from '../context/menuContext'

const CartMenu = () => {
  const [cartState, cartDispatch] = useContext(CartContext)
  const [menuState, menuDispatch] = useContext(MenuContext)
  const { data: products, httpConfig, loading, error } = useFetch(url)

  const priceCovert = (price) => {
    const newPrice = String(price).replace(".", ",")
    return newPrice
  }

  const totalValue = cartState.cartProducts.reduce((acc, product) => {
    const price = product.price
    return acc + price
  }, 0).toFixed(2).replace(".", ",")


  const discountedValue = cartState.cartProducts.reduce((acc, product) => {
    const discountedPrice = product.price - (product.price * 0.1)
    return acc + discountedPrice
  }, 0).toFixed(2).replace(".", ",")

  const discouted = totalValue.replace(",", ".") - discountedValue.replace(",", ".")

  return (
    <div className='container'>
      <button className='back' onClick={() => menuDispatch({ type: "GO_TO_SHOP" })}>VOLTAR</button>
      <h1 className='title'>Seu Carrinho</h1>
      {loading && <p><span className="bold">Carregando...</span></p>}
      {error ? <p><span>{error}</span></p> :
        <div className="products">
          {cartState.cartProducts && cartState.cartProducts.map((product) => (
            <div className="item" key={product.id}>
              <img src={product.image} alt="Camisa de time" />
              <div className="infos">
                <h1 className='name'>{product.name}</h1>
                <h2 className='oldPrice'><s>R${priceCovert(product.price)}</s><span className='porcentage'>-10%</span></h2>
                <h3 className='newPrice highlight'>R${priceCovert((product.price - (product.price * 0.1)).toFixed(2))}</h3>
                <button className='deleteCart' onClick={() => cartDispatch({ type: "DELETE_PRODUCT", payload: { productId: product.id } })}>Excluir Item do Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      }
      <h1 className='oldPrice'>Total: <s>R${totalValue}</s><span className='porcentage'>-R${discouted}</span></h1>
      <h2 className='newPrice highlight'>R${discountedValue}</h2>
    </div>
  )
}

export default CartMenu