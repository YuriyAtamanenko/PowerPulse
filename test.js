import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

import {
  register,
  loginization,
  logOut,
  refreshUser,
  updateUser,
} from './operations';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// це для того щоб виводити помилки в тостах
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  //   toast.error(
  //     `${action.payload}` === 'Network Error'
  //       ? `${action.payload}`
  //       : 'Something went wrong. Check your data and try again',
  //   );
};

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoaggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,

  // height: null,
  // currentWeight: null,
  // desiredWeight: null,
  // birthday: null,
  // blood: null,
  // sex: null,
  // levelActivity: null,
  bodyData: null,
};

const authSlise = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoaggedIn = true;
        // state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(loginization.pending, handlePending)
      .addCase(loginization.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload;
        state.isLoaggedIn = true;
        state.bodyData = action.payload.bodyData;

        refreshUser();

        // const dispatch = useDispatch();

        // try {
        //   await dispatch(refreshUser());
        // } catch (e) {
        //   // Handle any errors
        // }
        // state.isLoading = false;
      })
      .addCase(loginization.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoaggedIn = false;
        // state.isRefreshing = false;
        // state.error = null;
        // state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoaggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.height = action.payload;
        state.currentWeight = action.payload;
        state.desiredWeight = action.payload;
        state.birthday = action.payload;
        state.blood = action.payload;
        state.sex = action.payload;
        state.levelActivity = action.payload;
        state.isLoaggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReduser = authSlise.reducer;
