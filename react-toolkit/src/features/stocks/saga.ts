import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select } from "redux-saga/effects";
import { ISearchExistingRequest } from "../types";
import { createNewRequestForAddStockForm, getAPIDataForAddStockForm } from "../../services/api";
import { LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS } from "./slice";
import { IAddStocksForm, IExistingRequestForAddStocksForm } from "./types";
import { IAddStockFormApiData } from "../../services/types";
import { useAppSelector } from "../../hooks";
import { currentReqFromSelector } from "../../store/selectors";

export function* loadExistingRequestforAddStockForms(action: PayloadAction<ISearchExistingRequest>) {
  const searchRequest = action.payload as ISearchExistingRequest;
  try {
    const existingRequest: IAddStockFormApiData = yield call(getAPIDataForAddStockForm, searchRequest);
    const formatedExistingRequests: IExistingRequestForAddStocksForm[] = existingRequest.data.map(item => ({
      id: item.id.toString(),
      name: item.attributes.name,
      symbol: item.attributes.symbol,
      country: item.attributes.country,
      description: item.attributes.description,
    }));
    yield put(LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC_SUCCESS(formatedExistingRequests));
  } catch (error: Error | unknown) {
    console.log(`Failed to fetch API data for Listing Existing Request for AddStockForm ${error as string}`);
  }
}

export function* createRequestforAddStockForms(action: PayloadAction<IAddStocksForm>) {
  const currentRequest: IAddStocksForm = yield select(currentReqFromSelector);
  try {
    const newRequest: IAddStockFormApiData = yield call(createNewRequestForAddStockForm, currentRequest);
  } catch (error: Error | unknown) {
    console.log(`Failed on  API adding new request to AddStockForm at (createRequestforAddStockForms) ${error as string}`);
  }
}
