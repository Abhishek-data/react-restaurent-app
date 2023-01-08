import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const cartOpening = () => {
    setCartOpen(true)
  }
  const closeCart = () => {
    setCartOpen(false)
  }
  const ordering = () => {
    console.log('Ordering....')
    setCartOpen(false)
  }


  return (
    <CartProvider>
      { cartOpen && <Cart onClose={closeCart} onOrder={ordering}/>}
      <Header onOpen={cartOpening}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
