import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import "./Home.css"; // Import external CSS for better styling
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
            <Carousel />
        </div>
        <div className="col-12">
          <Featured />
        </div>
        <div className="col-12 mt-5">
          <Latest />
        </div>
      </div>
    </div>
  );
};

export default Home;
