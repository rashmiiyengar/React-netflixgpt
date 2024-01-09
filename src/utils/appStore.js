import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user:userSlice,
    movies:moviesReducer,
    gpt: gptReducer,
    config:configReducer

  },
});

export default appStore;
