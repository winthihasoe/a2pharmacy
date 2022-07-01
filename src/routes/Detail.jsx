import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import * as api from "../components/drugsApi";
import { UpdateForm } from "../components/UpdateForm";

export default function Detail() {
  let params = useParams();
  let drugId = params.drugId;

  const { isLoading, data, isError, error } = useQuery(
    ["drug", parseInt(drugId)],
    () => api.getDrug(drugId)
  );

  const [isEditing, setIsEditing] = useState(false);

  if (isError) {
    return (
      <div
        className="inner"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error.message}
      </div>
    );
  }
  if (isLoading) {
    return <Loading title={"Loading ... "} />;
  }
  return (
    <div className="inner text-center">
      <Navbar />
      {isEditing ? (
        <UpdateForm data={data} setIsEditing={setIsEditing} />
      ) : (
        <>
          {" "}
          <MDBTypography
            variant="h3"
            style={{ marginTop: "3rem", marginBottom: "2rem" }}
          >
            {data?.drug_name}
          </MDBTypography>
          <MDBTypography variant="h6">
            Retail Price : {data?.retail_price} ks
          </MDBTypography>
          <MDBTypography variant="h6">
            Doctor Price : {data?.dr_price} ks
          </MDBTypography>
          <MDBTypography variant="h6">
            Purchased Price : {data?.buying_price} ks
          </MDBTypography>
          <MDBTypography variant="h6">
            Supplier : {data?.supplier}
          </MDBTypography>
          <MDBTypography variant="h6">
            Purchased date : {data?.purchase_date}
          </MDBTypography>{" "}
        </>
      )}

      <MDBBtn
        outline
        color="warning"
        size="sm"
        style={{ marginTop: "0.4rem", display: "inline" }}
        onClick={() => setIsEditing(!isEditing)}
      >
        {/* <Link to={`/drugs/edit/${data.id}`}>Edit Drug</Link> */}
        {isEditing ? "Cancel" : "Edit"}
      </MDBBtn>
    </div>
  );
}
