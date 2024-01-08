import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user:userSlice,
    movies:moviesReducer

  },
});

export default appStore;
