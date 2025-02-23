import React from 'react'

const Featured = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 position-relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pineapple + Smoked Jackfruit Pizza"
              className="img-fluid rounded"
            />
            <span className="badge bg-light text-dark position-absolute top-0 start-0 m-3 px-3 py-2 fw-bold">
              FEATURED RECIPE
            </span>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold">Italian Special Pizza</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh
              vestibulum euismod morbi ullamcorper rutrum. Orci cras in
              phasellus ultricies.
            </p>
            <button className="btn btn-outline-dark">View Recipe</button>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Featured
