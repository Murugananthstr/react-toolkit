import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { ISearchExistingRequest } from "../types";
import { createNewRequestForAddStockForm, getAPIDataForAddStockForm } from "../../services/api";
import { CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC_SUCCESS, LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS } from "./slice";
import { IAddStocksForm, IExistingRequestForAddStocksForm } from "./types";
import { IAddStockFormApiData } from "../../services/types";
import { useAppSelector } from "../../hooks";

export function* loadExistingRequestforAddStockForms(action: PayloadAction<ISearchExistingRequest>) {
  const searchRequest = action.payload as ISearchExistingRequest;
  try {
    const existingRequest: IAddStockFormApiData = yield call(getAPIDataForAddStockForm, searchRequest);
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

export function* createRequestforAddStockForms(action: PayloadAction<IAddStocksForm>) {
  const currentRequest: IAddStocksForm = action.payload;
  try {
    const newRequest: IAddStockFormApiData = yield call(createNewRequestForAddStockForm, currentRequest);
  } catch (error: Error | unknown) {
    console.log(`Failed on  API adding new request to AddStockForm at (createRequestforAddStockForms) ${error as string}`);
  }
}
