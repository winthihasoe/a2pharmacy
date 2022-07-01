import { MDBBtn, MDBInput, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import * as api from "../../components/drugsApi";

export default function Login() {
  return (
    <div className="inner">
      <div className="edit-form text-center">
        <MDBTypography variant="h2" style={{ marginBottom: "1.5rem" }}>
          Login
        </MDBTypography>
        <form>
          <MDBInput
            label="Email"
            name="drug_name"
            style={{ marginBottom: "1rem" }}
            type="text"
          />
          <MDBInput
            label="Password"
            name="drug_name"
            style={{ marginBottom: "1rem" }}
            type="password"
          />
          <MDBBtn type="submit">Login</MDBBtn>
        </form>
      </div>
    </div>
  );
}
