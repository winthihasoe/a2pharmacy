import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as api from "../components/drugsApi";
import Loading from "../components/Loading";
export default function PurchasePrice() {
  const { data, isLoading, isError, error } = useQuery("drugs", api.getDrugs);

  if (isError) {
    <div
      style={{
        display: "flex",
        margin: 10,
        justifyContent: "center",
      }}
    >
      {error.message}
    </div>;
  }

  if (isLoading) {
    return <Loading title={"A2 pharmacy is loading ..."} />;
  }
  return (
    <div className="inner">
      <Navbar />

      {/* If there was error message, show it
      If not, show drug list  */}

      <main style={{ padding: 10 }}>
        <h2>Purchase Price</h2>

        <MDBTable bordered borderColor="info" small>
          <MDBTableHead>
            <tr>
              <th scope="col">Drug Name</th>
              <th width="30%" scope="col">
                Buy price
              </th>
            </tr>
          </MDBTableHead>
          {data?.map((drug) => (
            <MDBTableBody key={drug.id}>
              <tr>
                <Link to={`/drugs/${drug.id}`}>
                  <td>{drug.drug_name}</td>
                </Link>
                <td>{drug.buying_price}</td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
      </main>
    </div>
  );
}
