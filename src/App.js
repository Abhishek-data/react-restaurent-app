import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

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
    <Fragment>
      { cartOpen && <Cart close={closeCart} order={ordering}/>}
      <Header open={cartOpening}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
