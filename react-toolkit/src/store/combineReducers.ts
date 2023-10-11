import { addStockExistingSlice } from "../features/stocks/slice/existingRequestSlice";
import { addStockSlice } from "../features/stocks/slice/newRequestsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const stock = combineReducers({
  currentRequest: addStockSlice.reducer,
  existingRequest: addStockExistingSlice.reducer,
});

export const allRequestReducer = combineReducers({
  stock,
});
