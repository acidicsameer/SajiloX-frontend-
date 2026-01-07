/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../components/misc/statuses";
import { useNavigate } from "react-router-dom";

const authSlice = createSlice({
  name: "auth",
initialState: {
  user: "",
  status: "", 
  error: "",
  token:""
},

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setUser, setStatus, setError,setToken } = authSlice.actions;
export default authSlice.reducer;

/* ================= REGISTER USER ================= */

export const registerUser = (data) => {
  return async function  registerUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const res = await axios.post("http://localhost:3000/auth/register", data);
      dispatch(setUser(res.data.user));
      dispatch(setStatus(STATUSES.SUCCESS)); 
     
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      dispatch(setError(error.response?.data?.message || "Register failed"));
    }
  };
};
export const loginUser = (data) => {
  return async function  loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
  

    try {
      const res = await axios.post("http://localhost:3000/auth/login", data);
      dispatch(setUser(res.data.user));
      dispatch(setStatus(STATUSES.SUCCESS)); 
     dispatch(setToken)
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));

    }
  };
};
