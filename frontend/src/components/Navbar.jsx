import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container-fluid">
          {/* Brand Logo */}
          <Link className="navbar-brand" to="/">
            TastyTales
          </Link>

          {/* Navbar Toggle for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            {/* Centered Links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/submit">
                  Submit
                </Link>
              </li>
            </ul>
          </div>

          {/* Right-aligned Links */}
          <div className="d-flex">
            <Link className="nav-item me-3 text-dark no-underline" to="/login">
              Log In
            </Link>
            <Link className="nav-item text-dark no-underline" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
