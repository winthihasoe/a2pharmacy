import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";

function Home() {
  const { drugs, isLoading, errorMessage } = useFetch();

  return (
    <>
      <MDBContainer breakpoint="sm">
        <div className="inner">
          <h1 className="logo">A2 Pharmacy</h1>
          <MDBRow center>
            <MDBCol>
              <Link to="/add-drug">
                <div className="btn square">
                  <p className="text-white btn-label">Add Drug</p>
                </div>
              </Link>
            </MDBCol>

            <MDBCol>
              <Link to="all-drugs" state={{ drugs, isLoading, errorMessage }}>
                <div className="btn square">
                  <p className="text-white btn-label">All Drugs</p>
                </div>
              </Link>
            </MDBCol>
            <MDBCol>
              <Link
                to="retail-price"
                state={{ drugs, isLoading, errorMessage }}
              >
                <div className="btn square">
                  <p className="text-white btn-label">Retail Price</p>
                </div>
              </Link>
            </MDBCol>
            <MDBCol>
              <Link
                to="doctor-price"
                state={{ drugs, isLoading, errorMessage }}
              >
                <div className="btn square">
                  <p className="text-white btn-label">Doctor Price</p>
                </div>
              </Link>
            </MDBCol>
            <MDBCol>
              <Link
                to="purchase-price"
                state={{ drugs, isLoading, errorMessage }}
              >
                <div className="btn square">
                  <p className="text-white btn-label">purchase Price</p>
                </div>
              </Link>
            </MDBCol>
            <MDBCol>
              <Link to="suppliers">
                <div className="btn square">
                  <p className="text-white btn-label">Suppliers</p>
                </div>
              </Link>
            </MDBCol>
          </MDBRow>

          {/* <MDBFooter>
            <MDBRow id="info">
              <MDBCol>
                <h5 className="btn btn-success">Username</h5>
              </MDBCol>
              <MDBCol>
                <h5 className="btn btn-danger">Logout</h5>
              </MDBCol>
            </MDBRow>
          </MDBFooter> */}
        </div>
      </MDBContainer>
    </>
  );
}

export default Home;
