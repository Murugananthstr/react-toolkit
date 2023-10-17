import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IExistingRequestsForAddStockForm, LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC } from "./slice";
import { RequestType } from "./../../enums";
import { ISearchExistingRequest } from "../types";

const ListStocks: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentRequest: IExistingRequestsForAddStockForm = useAppSelector(state => state.allRequest.stock.existingRequest);
  const { data } = currentRequest;

  useEffect(() => {
    dispatch(LOAD_ADDSTOCKFORM_EXISTING_REQUEST_ASYNC({ requestType: RequestType.AddStocksForm } as ISearchExistingRequest));
  }, [data]);

  return (
    <div>
      <div>
        <table className="table table-border">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map(x => (
              <tr key={x.id}>
                <td> {x.name} </td>
                <td> {x.symbol} </td>
                <td> {x.country} </td>
                <td> {x.description} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStocks;
