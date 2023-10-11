import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddStocksForm } from "../types";

export interface IAddStockApp {
  data: IAddStocksForm;
}

const initialState: IAddStockApp = {
  data: {
    id: "",
    name: "",
    symbol: "",
    country: "",
    description: "",
  },
};

export const addStockSlice = createSlice({
  name: "AddStock",
  initialState,
  reducers: {
    SET_INITIAL_STATE: () => initialState,
    SET_DATA: (state, action: PayloadAction<IAddStocksForm>) => {
      state.data = action.payload;
    },
  },
});

export const { SET_DATA, SET_INITIAL_STATE } = addStockSlice.actions;
export default addStockSlice.reducer;
