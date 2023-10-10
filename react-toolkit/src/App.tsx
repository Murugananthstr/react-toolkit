import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddStocks from "./features/stocks/AddStocks";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddStocks />
      </Provider>
    </div>
  );
}

export default App;
