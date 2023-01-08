import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemHandler = item => {}
    const removeItemHandler = id => {}

  const cardContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <CartContext.Provider value={cardContext}>
        {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;