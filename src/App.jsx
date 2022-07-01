import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllDrugs from "./routes/AllDrugs";
import RetailPrice from "./routes/RetailPrice";
import DoctorPrice from "./routes/DoctorPrice";
import PurchasePrice from "./routes/PurchasePrice";
import Suppliers from "./routes/Suppliers";
import AddDrug from "./routes/AddDrug";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { EditDetail } from "./routes/EditDetail";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Home />} path="/" />
        <Route element={<AddDrug />} path="/add-drug" />
        <Route element={<AllDrugs />} path="/drugs" />
        <Route path="/drugs/:drugId" element={<Detail />} />
        <Route path="/drugs/edit/:drugId" element={<EditDetail />} />

        <Route element={<RetailPrice />} path="retail-price" />
        <Route element={<DoctorPrice />} path="doctor-price" />
        <Route element={<PurchasePrice />} path="purchase-price" />
        <Route element={<Suppliers />} path="suppliers" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
