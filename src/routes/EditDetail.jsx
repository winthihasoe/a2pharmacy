import { MDBBtn, MDBInput, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import * as api from "../components/drugsApi";

export const EditDetail = () => {
  let params = useParams();
  const id = params.drugId;
  const { data, isLoading, isError, error } = useQuery(["drug", id], () =>
    api.getDrug(id)
  );
  const [drug_name, setName] = useState(data?.drug_name);
  const [retail_price, setRetail_price] = useState(data?.retail_price);
  const [dr_price, setDr_price] = useState(data?.dr_price);
  const [buying_price, setBuying_price] = useState(data?.buying_price);
  const [supplier, setSupplier] = useState(data?.supplier);
  const [purchase_date, setPurchase_date] = useState(data?.purchase_date);
  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          margin: 10,
          justifyContent: "center",
        }}
      >
        {error.message}
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="inner text-center">
      <Navbar />
      <div className="edit-form">
        <MDBTypography variant="h2" style={{ marginBottom: "1.5rem" }}>
          Edit Drug Detail
        </MDBTypography>
        <form>
          <MDBInput
            label="Drug Name"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="text"
            value={drug_name}
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            label="Retail Price"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="number"
            value={retail_price}
            onChange={(e) => setRetail_price(e.target.value)}
          />
          <MDBInput
            label="Doctor Price"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="number"
            value={dr_price}
            onChange={(e) => setDr_price(e.target.value)}
          />

          <MDBInput
            label="Purchased Price"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="number"
            value={buying_price}
            onChange={(e) => setBuying_price(e.target.value)}
          />
          <MDBInput
            label="Supplier"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
          <MDBInput
            label="Purchased at"
            id="form1"
            style={{ marginBottom: "1rem" }}
            type="text"
            value={purchase_date}
            onChange={(e) => setPurchase_date(e.target.value)}
          />
          <MDBBtn outline color="warning" type="submit">
            Save
          </MDBBtn>
        </form>
      </div>
    </div>
  );
};
