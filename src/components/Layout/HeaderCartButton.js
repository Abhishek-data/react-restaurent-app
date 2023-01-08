import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [isButtonBump, setIsbuttonBump] = useState(false)
  const cartCtx = useContext(CartContext)
  const {items} = cartCtx
  const totalCartItem = items.reduce((currentNum, item) =>{
    return currentNum + item.amount
  },0)

  const btnClasses = `${classes.button} ${isButtonBump ? classes.bump: ''}`
  useEffect(() => {
    if(items.length===0) {
      return
    }
    const timer = setIsbuttonBump(true)
    setTimeout(() => {
      setIsbuttonBump(false)
    },300)
    return () => {
      clearTimeout(timer)
    }

  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
