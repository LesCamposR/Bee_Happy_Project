import React from "react";

export const Contact = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="full-name" className="form-label fs-5">
          Full Name
        </label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Full Name"
        />
        <label htmlFor="email" className="form-label fs-5">
          Email
        </label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter email"
        />
        <label htmlFor="phone" className="form-label fs-5">
          Phone
        </label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter phone"
        />
        <label htmlFor="address" className="form-label fs-5">
          Address
        </label>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter address"
        />
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="button-save col-md-6 btn btn-primary fs-6 fw-bold"
          >
            save
          </button>
        </div>

        <br />
        <Link to="/">
          <span className="fs-5">or get back to contacts</span>
        </Link>
      </form>
    </div>
  );
};
