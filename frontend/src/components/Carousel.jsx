import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg?t=st=1740306291~exp=1740309891~hmac=794312087722d117018ca542c65eaa9d4c8ffd3da5fe4c037bbbcc3be65cdb7a&w=2000"
            className="d-block w-100 carousel-img"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to TastyTales!</h5>
            <p>
              The go-to platform to explore unique & fresh recipes from around
              the world
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100 carousel-img"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Discover New Flavors</h5>
            <p>
              Explore a world of unique and exciting recipes crafted by home
              chefs and food lovers. From classic dishes to creative fusions,
              there’s something for everyone to try!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/2479242/pexels-photo-2479242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100 carousel-img"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Share Your Own Creations</h5>
            <p>
              Got a secret family recipe or a new dish you just perfected? Share
              it with the world!
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
