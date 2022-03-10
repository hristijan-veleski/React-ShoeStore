import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/auth-context";
import { cartActions } from "../../store/cart-context";
import classes from "./AccountButton.module.css";

const AccountButton = () => {
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const onAccountButtonClickHandler = (event) => {
    setButtonClicked(!buttonClicked);
  };

  const dropDownClasses = buttonClicked
    ? `${classes.dropDownContent} ${classes.show}`
    : classes.dropDownContent;

 
    const logoutHandler = ()=>{
      dispatch(cartActions.resetCart());
      dispatch(authActions.logoff());
    }

  return (
    <div className={classes.dropDown}>
      <button
        disabled={!isLoggedIn}
        className={classes.accountButton}
        onClick={onAccountButtonClickHandler}
      >
        <i class="fas fa-user-circle"></i>
        <span>Account</span>
      </button>
      <div className={dropDownClasses}>
        <Link to="/changePassword">Change Password</Link>
        <Link to="/" onClick={logoutHandler}>Log Out</Link>
      </div>
    </div>
  );
};

export default AccountButton;
