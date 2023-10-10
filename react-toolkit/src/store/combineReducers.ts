import { addStockSlice } from "../features/stocks/slice/newRequestsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const stock = combineReducers({
  currentRequest: addStockSlice.reducer,
});

export const allRequestReducer = combineReducers({
  stock,
});
