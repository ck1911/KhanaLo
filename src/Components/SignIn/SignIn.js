import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../Context/auth_context";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [userData, setUserData] = useState({
    first_name: "Alice",
    last_name: "K",
    email: "",
    password: "",
  });
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFipiuZpzX5NWOG3qo68DOyK6UbxZk9TDoVg&usqp=CAU"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </MDBCol>

        <MDBCol sm="6" style={{ padding: "0% 9%" }}>
         

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (login(userData)) navigate("/");
              }}
            >
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                onChange={(e) => {
                  setUserData((data) => ({ ...data, email: e.target.value }));
                }}
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                onChange={(e) => {
                  setUserData((data) => ({
                    ...data,
                    password: e.target.value,
                  }));
                }}
                size="lg"
              />

              <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
                Login
              </MDBBtn>
            </form>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a class="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?{" "}
              <a href="/register" class="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
