import { Fragment } from "react";
import burgerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Burger Singh</h1>
        <HeaderCartButton  onClick={props.onOpen}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={burgerImage} alt="BurgerImage" />
      </div>
    </Fragment>
  );
};

export default Header;
