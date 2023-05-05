import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <form>
                <label className="form-label fs-5">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Full Name" />
                <label className="form-label fs-5">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter email" />
                <label htmlFor="phone" className="form-label fs-5">
                    Phone
                </label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter phone" />

                <div className="d-flex justify-content-center">
                    <button type="button" className="button-save col-md-6 btn btn-primary fs-6 fw-bold">
                        Enviar                   </button>
                </div>
            </form>
        </div>
    )
};

export default Contact;
