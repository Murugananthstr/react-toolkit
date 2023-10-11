interface IAddStockAPIData {
  id: number;
  attributes: {
    name: string;
    symbol: string;
    description: string;
    country: string;
    createdAt: string; // Change to Date if needed
    updatedAt: string; // Change to Date if needed
    publishedAt: string; // Change to Date if needed
  };
}

export interface IAddStockFormApiData {
  data: IAddStockAPIData[];
}
