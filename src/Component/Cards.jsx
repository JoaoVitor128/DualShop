import { useFetch } from "../hook/useFetch"

import "./Cards.css"

const url = "http://localhost:3000/products"

import AddProduct from "./AddProduct"

const Cards = () => {
  const { data: products, httpConfig, loading, error } = useFetch(url)

  const priceCovert = (price) => {
    const newPrice = String(price).replace(".", ",")
    return newPrice
  }

  return (
    <>

      {loading && <p><span className="bold">Carregando...</span></p>}
      {error ? <p><span>{error}</span></p> :
        <div className="cardsContainer">
          {products && products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="Camisa de time" />
              <h3>{product.name}</h3>
              <p>R${priceCovert(product.price)}</p>
              <AddProduct productId={product.id}/>
            </div>
          ))}
        </div>
      }

    </>
  )
}

export default Cards