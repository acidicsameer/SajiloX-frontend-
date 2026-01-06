/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../components/misc/statuses";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: STATUSES.IDLE,
    error: null,
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
  },
});

export const { setUser, setStatus, setError } = authSlice.actions;
export default authSlice.reducer;

/* ================= REGISTER USER ================= */

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    dispatch(setError(null));

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/register",
        data
      );

      dispatch(setUser(res.data));     // save user
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      dispatch(setError(error.response?.data || "Register failed"));
    }
  };
};
