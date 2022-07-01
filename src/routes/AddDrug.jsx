import { MDBBtn, MDBInput, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useAddDrug } from "../components/useFetchDrug";

export default function AddDrug() {
  const [drug_name, setDrug_name] = useState("");
  const [retail_price, setRetail_price] = useState("");
  const [dr_price, setDr_price] = useState("");
  const [buying_price, setBuying_price] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchase_date, setPurchase_date] = useState("");

  const { mutate: addDrug, isSuccess, data } = useAddDrug();

  function handleAddDrug() {
    const drug = {
      drug_name,
      retail_price,
      dr_price,
      buying_price,
      supplier,
      purchase_date,
    };
    addDrug(drug);

    if (isSuccess) {
      setDrug_name("");
      return data.data.map((drug) => drug.drug_name);
    }
  }
  return (
    <div>
      <div className="inner text-center">
        <Navbar />
        <div className="edit-form">
          <MDBTypography variant="h2" style={{ marginBottom: "1.5rem" }}>
            Edit Drug Detail
          </MDBTypography>
          <MDBInput
            label="Drug Name"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="text"
            value={drug_name}
            onChange={(e) => setDrug_name(e.target.value)}
          />
          <MDBInput
            label="Retail Price"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="number"
            onChange={(e) => setRetail_price(e.target.value)}
          />
          <MDBInput
            label="Doctor Price"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="number"
            onChange={(e) => setDr_price(e.target.value)}
          />

          <MDBInput
            label="Purchased Price"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="number"
            onChange={(e) => setBuying_price(e.target.value)}
          />
          <MDBInput
            label="Supplier"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="text"
            onChange={(e) => setSupplier(e.target.value)}
          />
          <MDBInput
            label="Purchased at"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="text"
            onChange={(e) => setPurchase_date(e.target.value)}
          />
          <MDBBtn outline color="warning" onClick={handleAddDrug}>
            Update
          </MDBBtn>
        </div>
      </div>
    </div>
  );
}
