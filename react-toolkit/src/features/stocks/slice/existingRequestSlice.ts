import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchExistingRequest } from "../../types";
import { IExistingRequestForAddStocksForm } from "../index";
import { RootState } from "../../../store";

export interface IExistingRequestsForAddStockForm {
  data: IExistingRequestForAddStocksForm[];
  isLoading: boolean;
}

const initialState: IExistingRequestsForAddStockForm = {
  data: [],
  isLoading: false,
};

export const addStockExistingSlice = createSlice({
  name: "ExistingRequestsForAddStockForm",
  initialState,
  reducers: {
    LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC: (state, action: PayloadAction<ISearchExistingRequest>) => {
      state.isLoading = true;
    },
    LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS: (state, action: PayloadAction<IExistingRequestForAddStocksForm[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC, LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS } = addStockExistingSlice.actions;
export default addStockExistingSlice.reducer;
