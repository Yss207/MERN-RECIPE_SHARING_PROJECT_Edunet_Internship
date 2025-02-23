import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="container my-5 p-1 text-dark"
        style={{
          width: "400px",
          border: "5px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2 className="text-center fs-3 mt-2">Login</h2>

        <form style={{ width: "300px", margin: "auto" }} className="my-3 p-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control border-dark"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border-dark"
              id="exampleInputPassword1"
            />
          </div>

          <Link to={"/"} type="submit" className="btn btn-primary">
            Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
