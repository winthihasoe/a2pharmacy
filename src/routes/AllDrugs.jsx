import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import useFetchDrugs from "../components/useFetchDrugs";
import Loading from "../components/Loading";
import * as api from "../components/drugsApi";
import { useQuery } from "react-query";

function AllDrugs() {
  // const { data, isLoading, error, isError } = useFetchDrugs();

  const { data, isLoading, error, isError } = useQuery("drugs", api.getDrugs);

  if (isLoading) {
    return <Loading title={"A2 pharmacy is loading ..."} />;
  }

  return (
    <div className="inner">
      <Navbar />

      {/* If there was error message, show it
      If not, show drug list  */}

      {/* {isLoading && (
        <div
          
        >
          A2 Pharmacy is loading ...
        </div>
      )} */}

      {isError && (
        <div
          style={{
            display: "flex",
            margin: 10,
            justifyContent: "center",
          }}
        >
          {error.message}
        </div>
      )}
      {!isError && (
        <main style={{ padding: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ddd",
              padding: 5,
              borderRadius: 5,
              marginBottom: 2,
            }}
          >
            <div>No.</div>
            <div>Drug Name</div>
          </div>
          {data?.map((drug, index) => (
            <Link to={`/drugs/${drug.id}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  padding: 5,
                  borderRadius: 5,
                  marginBottom: 2,
                }}
                key={drug.id}
              >
                <div>{index + 1}</div>
                <div>{drug.drug_name}</div>
              </div>
            </Link>
          ))}
        </main>
      )}
    </div>
  );
}

export default AllDrugs;
