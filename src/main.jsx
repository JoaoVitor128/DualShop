import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './context/themeContext.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { MenuProvider } from './context/menuContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </MenuProvider>
  </StrictMode>,
)
