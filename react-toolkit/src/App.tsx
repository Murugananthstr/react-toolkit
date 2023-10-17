import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddStocks from "./features/stocks/AddStocks";
import { Provider } from "react-redux";
import { store } from "./store";
import ListStocks from "./features/stocks/ListStocks";
import SideNavBar from "./features/layout/SideNavBar";
import MiniDrawer from "./features/layout/MiniDrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <SideNavBar /> */}
        <BrowserRouter>
          <Box sx={{ display: "flex", marginTop: 7 }}>
            <MiniDrawer />
            <Routes>
              <Route path="/" element={<ListStocks />} />
              <Route path="/AddSharesDomainData" element={<AddStocks />} />
              <Route path="/ViewSharesDomainData" element={<ListStocks />} />
            </Routes>
          </Box>
        </BrowserRouter>
        {/* <AddStocks />
        <ListStocks /> */}
      </Provider>
    </div>
  );
}

export default App;
