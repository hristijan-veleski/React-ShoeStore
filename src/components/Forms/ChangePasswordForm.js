import useInput from "../../hooks/use-input";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Layout from "../Layout/Layout";
import classes from "./Form.module.css";

const ChangePasswordForm = (props) => {
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

  const onSubmitPasswordChangeHandler = (event) => {
    event.preventDefault();

    if (!passwordIsValid) {
      return;
    }

    props.onChangePasswordRequest(enteredPassword);
  };

  const passwordInputClasses = passwordIsInvalid
    ? `${classes.inputGroup} ${classes.invalid}`
    : classes.inputGroup;

  return (
    <Layout extraClass={classes.direction}>
      <div className={classes.formContainer}>
        <form onSubmit={onSubmitPasswordChangeHandler}>
          <div className={passwordInputClasses}>
            <label htmlFor="passwordInput">Change Password</label>
            <input
              id="passwordInput"
              required
              type="password"
              onChange={onChangePasswordHandler}
              onBlur={onBlurPasswordHandler}
              value={enteredPassword}
            />
            {passwordIsInvalid ? (
              <p className={classes.errorText}>Enter a valid password please</p>
            ) : (
              <br></br>
            )}
          </div>
          <button disabled={passwordIsInvalid} className={classes.loginButton}>
            Change Password
          </button>
        </form>
      </div>
      {props.isLoading && <LoadingSpinner />}
    </Layout>
  );
};

export default ChangePasswordForm;
