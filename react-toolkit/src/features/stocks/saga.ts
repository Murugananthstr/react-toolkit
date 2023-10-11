import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { ISearchExistingRequest } from "../types";
import { getAPIForAddStockForm } from "../../services/api";
import { IExistingRequestsForAddStockForm, LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS } from "./slice";
import { IExistingRequestForAddStocksForm } from "./types";
import { AddStockFormApiData } from "../../services/types";

export function* loadExistingRequestforAddStockForms(action: PayloadAction<ISearchExistingRequest>) {
  const searchRequest = action.payload as ISearchExistingRequest;
  try {
    const existingRequest: AddStockFormApiData = yield call(getAPIForAddStockForm, searchRequest);
    const formatedExistingRequests: IExistingRequestForAddStocksForm[] = existingRequest.data.map(item => ({
      id: item.id.toString(),
      name: item.attributes.name,
      symbol: item.attributes.symbol,
      country: item.attributes.country,
    }));
    yield put(LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS(formatedExistingRequests));
  } catch (error: Error | unknown) {
    console.log(`Failed to fetch API data for Listing Existing Request for AddStockForm ${error as string}`);
  }
}
