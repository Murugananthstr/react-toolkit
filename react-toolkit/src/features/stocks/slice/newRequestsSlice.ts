import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddStocksForm } from "../types";

export interface IAddStockApp {
  data: IAddStocksForm;
}

const initialState: IAddStockApp = {
  data: {
    id: 0,
    data: {
      name: "",
      symbol: "",
      country: "",
      description: "",
    },
  },
};

export const addStockSlice = createSlice({
  name: "AddStock",
  initialState,
  reducers: {
    SET_INITIAL_STATE: () => initialState,
    SET_DATA: (state, action: PayloadAction<IAddStocksForm>) => {
      state.data = action.payload;
      console.log(JSON.stringify(state.data));
    },
    CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC: (state, action: PayloadAction<IAddStocksForm>) => {},
    CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC_SUCCESS: (state, action: PayloadAction<IAddStocksForm>) => {},
  },
});

export const { SET_DATA, SET_INITIAL_STATE, CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC, CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC_SUCCESS } =
  addStockSlice.actions;
export default addStockSlice.reducer;
