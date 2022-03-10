import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-context";
import LoginForm from "../components/Forms/LoginForm";




const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(state=>state.auth.token);
  const expirationTime = useSelector(state=>state.auth.expirationDate);


  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    if (token){
      dispatch(authActions.login({token:token,expirationTime:expirationTime}));  
      console.log("useEffect runs");
    }
  },[token,dispatch,expirationTime])

  const sendAuthRequestHandler = (logInFlag, formData) => {
    let url;
    if (logInFlag) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvzyMrom_u2p7nWjUubVSvPXk8NHgQT5U";
      } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvzyMrom_u2p7nWjUubVSvPXk8NHgQT5U";
    }
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application.json" },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
            //ovde error modal
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime()+(+data.expiresIn * 1000));
        dispatch(authActions.login({token:data.idToken,expirationTime:expirationTime.toISOString()}));
        //here also dispatch action to get the stored cartDataItems with the data.email response payload
        navigate("/model-selection");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <React.Fragment>
      <LoginForm isLoading={isLoading} sendAuthRequest={sendAuthRequestHandler} />
    </React.Fragment>
  );
};

export default LoginPage;
