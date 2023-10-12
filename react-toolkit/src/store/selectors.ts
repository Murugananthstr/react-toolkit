import { RootState } from "./store";

export const currentReqFromSelector = (state: RootState) => state.allRequest.stock.currentRequest.data;
