import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "New York Style Pizza",
    image:
      "https://images.pexels.com/photos/11974635/pexels-photo-11974635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Flatbread",
    time: "1 hour",
  },
  {
    id: 2,
    title: "Masala Dosa",
    image:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Breakfast",
    time: "30 minutes",
  },
  {
    id: 3,
    title: "Chicken Biriyani",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Main Course",
    time: "1 hour",
  },
  {
    id: 4,
    title: "Samosa",
    image:
      "https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Street Food",
    time: "30 minutes",
  },
];

const Latest = () => {
  return (
    <section className="container my-5">
      <h2 className="fw-bold">Latest Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-3">
            <div className="card border-0 shadow-sm rounded">
              {/* Image Section */}
              <div className="position-relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {/* <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-3 py-1 fw-bold">
                  Easy
                </span> */}
              </div>

              {/* Card Body */}
              <div className="card-body text-center">
                <h5 className="card-title">{recipe.title}</h5>
                <span className="badge bg-light text-success px-3 py-1">
                  {recipe.category}
                </span>
                {/* <span className="text-muted ms-3">⏱ {recipe.time}</span> */}

                {/* View Recipe Button */}
                <div className="mt-3">
                  <button className="btn btn-outline-dark">View Recipe</button >
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Recipes Button */}
      <div className="text-center mt-4">
        <Link to={"/recipes"} className="btn btn-outline-dark">View All Recipes</Link>
      </div>
    </section>
  );
};

export default Latest;
