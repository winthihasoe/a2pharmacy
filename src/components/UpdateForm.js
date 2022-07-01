import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBTypography } from "mdb-react-ui-kit";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../components/drugsApi";
import Loading from "./Loading";

export const UpdateForm = ({ data, setIsEditing }) => {
  const [fields, setFields] = useState({ ...data });

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(api.updateDrug, {
    onSuccess: (data) => {
      queryClient.setQueryData(["drug", data.id], data);
      setIsEditing(false);
    },
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    mutate(fields);
  };

  if (isLoading) {
    return <Loading title={"Your drug is saving ..."} />;
  }
  return (
    <div className="edit-form">
      <MDBTypography variant="h2" style={{ marginBottom: "1.5rem" }}>
        Edit Drug Detail
      </MDBTypography>
      <form onSubmit={handleUpdate}>
        <MDBInput
          label="Drug Name"
          name="drug_name"
          style={{ marginBottom: "1rem" }}
          type="text"
          value={fields.drug_name}
          onChange={handleChange}
        />
        <MDBInput
          label="Retail Price"
          name="retail_price"
          style={{ marginBottom: "1rem" }}
          type="number"
          value={fields.retail_price}
          onChange={handleChange}
        />
        <MDBInput
          label="Doctor Price"
          name="dr_price"
          style={{ marginBottom: "1rem" }}
          type="number"
          value={fields.dr_price}
          onChange={handleChange}
        />

        <MDBInput
          label="Purchased Price"
          name="buying_price"
          style={{ marginBottom: "1rem" }}
          type="number"
          value={fields.buying_price}
          onChange={handleChange}
        />
        <MDBInput
          label="Supplier"
          name="supplier"
          style={{ marginBottom: "1rem" }}
          type="text"
          value={fields.supplier}
          onChange={handleChange}
        />
        <MDBInput
          label="Purchased at"
          name="purchase_date"
          style={{ marginBottom: "1rem" }}
          type="text"
          value={fields.purchase_date}
          onChange={handleChange}
        />
        <MDBBtn color="warning" type="submit" style={{ display: "inline" }}>
          Save
        </MDBBtn>
      </form>
    </div>
  );
};
