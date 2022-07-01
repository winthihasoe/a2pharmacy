import axios from "axios";
import { MDBBtn, MDBInput, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    // error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  // const registerSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name: registerInput.name,
  //     email: registerInput.email,
  //     password: registerInput.password,
  //   };

  //   axios.get("/sanctum/csrf-cookie").then((response) => {
  //     axios.post(`/api/v1/register`, data).then((res) => {
  //       if (res.data.status === 200) {
  //       } else {
  //         setRegisterInput({
  //           ...registerInput,
  //           error_list: res.data.validation_errors,
  //         });
  //       }
  //     });
  //   });
  // };

  const registerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/register", registerInput)

      .then((res) => {
        if (res.data.status === 201) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.user);
          swal("Success", res.data.message, "success");
          navigate("/");
        }
      });
    console.log(registerInput);
  };

  return (
    <div className="inner">
      <h1 className="logo">A2 Pharmacy</h1>
      <div className="edit-form text-center">
        <MDBTypography variant="h2" style={{ marginBottom: "1.5rem" }}>
          Register
        </MDBTypography>
        <form onSubmit={registerSubmit}>
          <MDBInput
            label="Name"
            name="name"
            style={{ marginBottom: "1rem" }}
            value={registerInput.name}
            onChange={handleInput}
            type="text"
          />
          <MDBInput
            label="Email"
            name="email"
            style={{ marginBottom: "1rem" }}
            value={registerInput.email}
            onChange={handleInput}
            type="text"
          />
          <MDBInput
            label="Password"
            name="password"
            style={{ marginBottom: "1rem" }}
            value={registerInput.password}
            onChange={handleInput}
            type="password"
          />
          <MDBInput
            label="Cofirm Password"
            name="password_confirmation"
            style={{ marginBottom: "1rem" }}
            value={registerInput.password_confirmation}
            onChange={handleInput}
            type="password"
          />

          <MDBBtn type="submit" color="warning" outline>
            Register
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}
