import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import useFetch from "../components/useFetch";

export default function PurchasePrice() {
  const location = useLocation();
  const { drugs, isLoading, errorMessage } = location.state;

  return (
    <div className="inner">
      <Navbar />

      {/* If there was error message, show it
      If not, show drug list  */}

      {errorMessage ? (
        <div
          style={{
            display: "flex",
            margin: 10,
            justifyContent: "center",
          }}
        >
          {errorMessage}
        </div>
      ) : (
        <main style={{ padding: 10 }}>
          <h2>Purchase Price</h2>
          {isLoading && <div>Loading ...</div>}

          <MDBTable bordered borderColor="info" small>
            <MDBTableHead>
              <tr>
                <th scope="col">Drug Name</th>
                <th width="30%" scope="col">
                  Buy price
                </th>
              </tr>
            </MDBTableHead>
            {drugs.map((drug) => (
              <MDBTableBody>
                <tr>
                  <td>{drug.drug_name}</td>
                  <td>{drug.buying_price}</td>
                </tr>
              </MDBTableBody>
            ))}
          </MDBTable>
        </main>
      )}
    </div>
  );
}
