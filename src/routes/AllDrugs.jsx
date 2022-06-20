import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import Navbar from "../components/Navbar";
// import useFetch from "../components/useFetch";
import { useLocation } from "react-router-dom";

function AllDrugs() {
  const location = useLocation();
  const { drugs, isLoading, errorMessage } = location.state;

  return (
    <div className="inner">
      <Navbar />

      {/* If there was error message, show it
      If not, show drug list  */}

      {isLoading && (
        <div
          style={{
            display: "flex",
            margin: 10,
            justifyContent: "center",
          }}
        >
          A2 Pharmacy is loading ...
        </div>
      )}

      {errorMessage && (
        <div
          style={{
            display: "flex",
            margin: 10,
            justifyContent: "center",
          }}
        >
          {errorMessage}
        </div>
      )}
      {!errorMessage && (
        <main style={{ padding: 10 }}>
          <MDBTable bordered borderColor="info" small>
            <MDBTableHead>
              <tr>
                <th scope="col">No.</th>
                <th width="100%" scope="col">
                  Drug Name
                </th>
              </tr>
            </MDBTableHead>
            {drugs.map((drug) => (
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td width="100%">{drug.drug_name}</td>
                </tr>
              </MDBTableBody>
            ))}
          </MDBTable>
        </main>
      )}
    </div>
  );
}

export default AllDrugs;
