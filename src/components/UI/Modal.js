import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const element = document.getElementById('overlay')
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, element)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
    </Fragment>
  );
};

export default Modal;
