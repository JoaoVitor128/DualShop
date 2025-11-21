import './App.css'

import { useContext, useState } from "react"
import { ThemeContext } from './context/themeContext'
import { MenuContext } from './context/menuContext'

import ThemeButton from './Component/Theme'
import Cart from "./Component/Cart"
import CartMenu from "./Component/CartMenu"

import Cards from './Component/Cards'

function App() {
  const [themeState, themeDispatch] = useContext(ThemeContext)
  const theme = themeState.theme

  const [menuState, menuDispatch] = useContext(MenuContext)

  return (
    <div className={`App ${theme ? "light" : "dark"}`}>
      <nav>
        <ThemeButton ThemeContext={ThemeContext} />
        <Cart />
      </nav>
      {menuState.siteStage === "Shop" && <>
        <div className="container">
          <div className="text">
            <h1>Camisas de Time</h1>
            <p>encontre aqui as melhores camisas de time dos clubes da primeira divisão brasileira!</p>
          </div>

          <Cards />

        </div>
      </>}
      {menuState.siteStage === "Cart" && <CartMenu/>}
    </div>
  )
}

export default App
