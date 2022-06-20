import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDrugs from "./routes/AllDrugs";
import RetailPrice from "./routes/RetailPrice";
import DoctorPrice from "./routes/DoctorPrice";
import PurchasePrice from "./routes/PurchasePrice";
import Suppliers from "./routes/Suppliers";
import AddDrug from "./routes/AddDrug";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AddDrug />} path="/add-drug" />
        <Route element={<AllDrugs />} path="all-drugs" />
        <Route element={<RetailPrice />} path="retail-price" />
        <Route element={<DoctorPrice />} path="doctor-price" />
        <Route element={<PurchasePrice />} path="purchase-price" />
        <Route element={<Suppliers />} path="suppliers" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
