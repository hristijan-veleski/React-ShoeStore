import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bumpButtonActions } from "../../store/bumpButton-context";
import { modalActions } from "../../store/modal-context";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

  const btnIsHighlighted = useSelector(state =>state.bump.bumpButtonFlag);

  const openCartHandler = () => {
    dispatch(modalActions.showModal());
  };

  const items = useSelector((state) => state.cart.cart);
  const itemsAmount = items.reduce((curr, item) => curr + item.amount, 0);

  const btnClasses = `${classes.cartButton} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  setTimeout(()=>{
    dispatch(bumpButtonActions.toggleBumpFlag(false));
  },300)
  

  return (
    <button className={btnClasses} onClick={openCartHandler} disabled={!isLoggedIn}>
      <i class="fa fa-shopping-cart"></i>
      <span>Cart</span>
      <span className={classes.amount}>{itemsAmount}</span>
    </button>
  );
};

export default CartButton;
