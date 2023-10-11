import { loadExistingRequestforAddStockForms } from "../../../features/stocks/saga";
import { LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC } from "../../../features/stocks/slice/existingRequestSlice";
import { takeLatest } from "redux-saga/effects";

export function* rootSaga() {
  yield takeLatest(LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC, loadExistingRequestforAddStockForms);
}
