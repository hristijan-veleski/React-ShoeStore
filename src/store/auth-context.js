import { createSlice } from "@reduxjs/toolkit";

let expirationTimer;

const calculateRemainingTime = (expiration) => {
  const currTime = new Date().getTime();
  const expirationTime = new Date(expiration).getTime();

  const remainingTime = expirationTime - currTime;
  return remainingTime;
};

const initialAuthState = {
  token: localStorage.getItem("token"),
  expirationDate:localStorage.getItem("expirationDate"),
  isLoggedIn: !!localStorage.getItem("token"),
};

const authContext = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logoff: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      state.isLoggedIn = false;
      state.token = null;
      if (expirationTimer) {
        clearTimeout(expirationTimer);
      }
    },
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expirationDate",action.payload.expirationTime)
      state.isLoggedIn = true;
      state.token = action.payload.token;

      const remainingTime = calculateRemainingTime(
        action.payload.expirationTime
      );
      console.log(remainingTime);
      expirationTimer = setTimeout(() => {
        localStorage.removeItem("token");
        state.isLoggedIn = false;
        state.token = null;
      }, remainingTime);
    },
  },
});

export const authActions = authContext.actions;

export default authContext.reducer;
