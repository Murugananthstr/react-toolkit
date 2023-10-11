import { IExistingRequestForAddStocksForm } from "../features/stocks";
import { IExistingRequestsForAddStockForm } from "../features/stocks/slice/existingRequestSlice";
import { ISearchExistingRequest } from "../features/types";

export const requestHeaderAync = async (id?: string) => ({
  "Content-Type": "application/json; charset=utf-8",
});

export const getAPIForAddStockForm = async (searchRequest: ISearchExistingRequest): Promise<IExistingRequestsForAddStockForm> => {
  const request: RequestInit = {
    method: "GET",
    headers: await requestHeaderAync(),
  };

  const url = "http://localhost:1337/api/stocks";
  console.log("test from api");
  const httpResponse = await fetch(url, request);

  if (!httpResponse.ok) {
    // Todo
    // Throw error at message bar
    throw new Error(` Error while fetching Stock ${httpResponse.status}`);
  }

  const response = (await httpResponse.json()) as IExistingRequestsForAddStockForm;
  return response;
};
