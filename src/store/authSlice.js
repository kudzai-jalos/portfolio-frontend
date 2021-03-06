import { createSlice } from "@reduxjs/toolkit";
let token = localStorage.getItem("TOKEN");
const tokenExpires = localStorage.getItem("TOKEN_EXPIRES");

const deleteToken = () => {
  //console.log("DELETING token");
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("TOKEN_EXPIRES");
};

if (token) {
  // const expiryDate = new Date(tokenExpires);
  if (new Date(tokenExpires).getTime() < new Date().getTime()) {
    token = null;
    deleteToken();
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: token !== null,
    token: token,
    tokenExpires
  },
  reducers: {
    login: (state, action) => {
      const token = action.payload;
      //console.log("Login with token", token);
      const tokenExpires = new Date().getTime() + 1000 * 60 * 60;
      localStorage.setItem("TOKEN", token);
      localStorage.setItem(
        "TOKEN_EXPIRES",
        tokenExpires
      ); //1hr
      state.token = token;
      state.isAuth = true;
      state.tokenExpires = tokenExpires;
    },
    logout: (state) => {
      state.token = null;
      deleteToken();
      state.isAuth = false;
      state.tokenExpires=null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
