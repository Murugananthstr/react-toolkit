import { createRequestforAddStockForms, loadExistingRequestforAddStockForms } from "../../../features/stocks/saga";
import { LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC } from "../../../features/stocks/slice/existingRequestSlice";
import { takeLatest } from "redux-saga/effects";
import { CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC } from "../../../features/stocks/slice/newRequestsSlice";

export function* rootSaga() {
  yield takeLatest(LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC, loadExistingRequestforAddStockForms);
  yield takeLatest(CREATE_REQUEST_FOR_ADDSTOCKFORM_ASYNC, createRequestforAddStockForms);
}
