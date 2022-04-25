import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  dialog: dialogReducer,
  product: productSlice,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
