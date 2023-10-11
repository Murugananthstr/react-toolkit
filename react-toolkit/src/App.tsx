import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddStocks from "./features/stocks/AddStocks";
import { Provider } from "react-redux";
import { store } from "./store";
import ListStocks from "./features/stocks/ListStocks";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddStocks />
        <ListStocks />
      </Provider>
    </div>
  );
}

export default App;
