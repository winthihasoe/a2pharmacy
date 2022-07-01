import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as api from "../components/drugsApi";
export default function DoctorPrice() {
  const { data, isLoading, isError, error } = useQuery("drugs", api.getDrugs);

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
  return (
    <div className="inner">
      <Navbar />

      {/* If there was error message, show it
      If not, show drug list  */}

      <main style={{ padding: 10 }}>
        <h2>Doctor Price</h2>
        {isLoading && <div>Loading ...</div>}

        <MDBTable bordered borderColor="info" small>
          <MDBTableHead>
            <tr>
              <th scope="col">Drug Name</th>
              <th width="30%" scope="col">
                Dr Price
              </th>
            </tr>
          </MDBTableHead>
          {data?.map((drug) => (
            <MDBTableBody key={drug.id}>
              <tr>
                <Link to={`/drugs/${drug.id}`}>
                  <td>{drug.drug_name}</td>
                </Link>
                <td>{drug.dr_price}</td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
      </main>
    </div>
  );
}
