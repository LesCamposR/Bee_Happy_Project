import React, { useState } from "react";
import background from "../../img/Sunset.jpg";
import background2 from "../../img/Green.jpg";

export const Contact = () => {
    const [message, setMessage] = useState("");

  return (
    <div className="container-fluid mt-5 background-image"
    style={{ backgroundImage: `url(${background})` }} >
      
      <div className="row justify-content-center mt-5">
        <h3 className="title"> Contacto </h3>
        <div className="col-sm-4 rounded-3 m-3 p-3 border">
          <form>
            <label className="form-label fs-5">Nombre Completo</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Full Name"
            />
            <label className="form-label fs-5">Correo</label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter email"
            />
            <label htmlFor="phone" className="form-label fs-5">
              Telefono
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter phone"
            />
            <label htmlFor="phone" className="form-label fs-5">
              Comentario
            </label>
            <textarea
              type="text-area"
              className="form-control mb-3"
              placeholder="Enter your commit"
            ></textarea>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="button-save col-md-6 btn btn-primary fs-6 fw-bold"
              >
                Enviar{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <br/>
      <p>
        <span className="Bold">Bee Happy Office</span>
        <br/>
        Alajuela, Costa Rica
        <br/>
        Apartado Postal
        <br/>
        (506) 8888-8888
      </p>
    </div>
  );
};
