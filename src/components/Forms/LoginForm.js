import { useState } from "react";
import useInput from "../../hooks/use-input";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Layout from "../Layout/Layout";

import classes from "./Form.module.css";



const LoginForm = (props) => {
  const [isLogInFlag, setIsLogInFlag] = useState(true);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    valueChangeHandler: onChangeEmailHandler,
    valueBlurHandler: onBlurEmailHandler,
  } = useInput((value) => {
    const reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return reg.test(value);
  });


  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    isInvalid: passwordIsInvalid,
    valueChangeHandler: onChangePasswordHandler,
    valueBlurHandler: onBlurPasswordHandler,
  } = useInput((value) => {
    const reg = new RegExp(/[A-Za-z0-9]{7,13}$/);
    return reg.test(value);
  });

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const onLoginHandler = (event) => {
    event.preventDefault();

    if (!emailIsValid && !passwordIsValid) {
      return;
    }

    props.sendAuthRequest(isLogInFlag, {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    });
  };

  const emailInputClasses = emailIsInvalid
    ? `${classes.inputGroup} ${classes.invalid}`
    : classes.inputGroup;

  const passwordInputClasses = passwordIsInvalid
    ? `${classes.inputGroup} ${classes.invalid}`
    : classes.inputGroup;

  const switchAuthModeHandler = () => {
    setIsLogInFlag((prevState) => !prevState);
  };

  return (
    <Layout extraClass={classes.direction}>
      <div className={classes.formContainer}>
        <h3 className={classes.loginTitle}>
          {isLogInFlag ? "Log in" : "Sign Up"}
        </h3>
        <form className={classes.form} onSubmit={onLoginHandler}>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              onChange={onChangeEmailHandler}
              onBlur={onBlurEmailHandler}
              value={enteredEmail}
            />
            {emailIsInvalid ? (
              <p className={classes.errorText}>Enter a valid email please</p>
            ) : (
              <br></br>
            )}
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              onChange={onChangePasswordHandler}
              onBlur={onBlurPasswordHandler}
              value={enteredPassword}
              required
            />
            {passwordIsInvalid ? (
              <p className={classes.errorText}>Enter a valid password please</p>
            ) : (
              <br></br>
            )}
          </div>
          <button disabled={!formIsValid} className={classes.loginButton}>
            {isLogInFlag ? "Login" : "Sign up"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogInFlag ? "Create an Account" : "Login with existing account"}
          </button>
        </form>
      </div>
      {props.isLoading && <LoadingSpinner />}
    </Layout>
  );
};

export default LoginForm;
