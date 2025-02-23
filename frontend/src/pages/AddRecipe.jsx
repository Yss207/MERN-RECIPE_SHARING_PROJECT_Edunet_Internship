import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const AddRecipe = () => {
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
        <h2 className="text-center fs-3 mt-2">Add Recipe</h2>

        <form style={{ width: "300px", margin: "auto" }} className="my-3 p-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name of the Recipe:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="exampleInputName1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Instruction:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ingredient 1:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ingredient 2:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Ingredient 3:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipe
