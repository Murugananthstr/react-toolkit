import { IAddStocksForm } from "../features/stocks";
import { IExistingRequestsForAddStockForm } from "../features/stocks/slice/existingRequestSlice";
import { ISearchExistingRequest } from "../features/types";
import { IAddStockFormApiData } from "./types";

export const getRequestHeaderAync = async (id?: string) => ({
  // "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
});

export const getAPIDataForAddStockForm = async (searchRequest: ISearchExistingRequest): Promise<IExistingRequestsForAddStockForm> => {
  const request: RequestInit = {
    method: "GET",
    headers: await getRequestHeaderAync(),
  };

  const url = "http://localhost:1337/api/stocks";
  const httpResponse = await fetch(url, request);

  if (!httpResponse.ok) {
    // Todo
    // Throw error at message bar
    throw new Error(` Error while fetching Stock ${httpResponse.status}`);
  }

  const response = (await httpResponse.json()) as IExistingRequestsForAddStockForm;
  return response;
};

export const createNewRequestForAddStockForm = async (newRequest: IAddStocksForm): Promise<IAddStockFormApiData> => {
  const request: RequestInit = {
    method: "POST",
    headers: await getRequestHeaderAync(),
    body: JSON.stringify(newRequest),
  };

  console.log("Reached Create API for Add Stock Form");

  const url = "http://localhost:1337/api/stocks";
  const httpResponse = await fetch(url, request);

  if (!httpResponse.ok) {
    // Todo
    // Throw error at message bar
    throw new Error(` Error while creating new request to AddStockForms ${httpResponse.status}`);
  }

  const response = (await httpResponse.json()) as IAddStockFormApiData;
  return response;
};
