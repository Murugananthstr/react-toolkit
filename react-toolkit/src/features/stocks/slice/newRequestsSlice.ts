import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStocks } from "../types";

export interface IAddStockApp {
  data: IStocks;
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
    SET_DATA: (state, action: PayloadAction<IStocks>) => {
      state.data = action.payload;
      console.log("from Slice:", state.data);
    },
  },
});

export const { SET_DATA, SET_INITIAL_STATE } = addStockSlice.actions;
export default addStockSlice.reducer;
