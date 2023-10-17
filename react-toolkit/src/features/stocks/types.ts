export interface IStock {
  name: string;
  symbol: string;
  description: string;
  country: string;
}

export interface IAddStocksForm {
  id: number;
  data: IStock;
}

export interface IExistingRequestForAddStocksForm {
  id: string;
  name: string;
  symbol: string;
  country: string;
  description: string;
}
