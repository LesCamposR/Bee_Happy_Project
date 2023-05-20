import React, { useState } from "react";
import background from "../../img/Sunset.jpg";

export const Contact = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="container mt-5">
      <div
        className=" row justify-content-center mt-5"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3 className="row justify-content-center text-white title">
          {" "}
          Contáctnos{" "}
        </h3>{" "}
        <div className="Contanct col-sm-4 rounded-3 m-3 p-3 border">
          <form>
            <label className="form-label fs-5 text-white">
              {" "}
              Nombre Completo{" "}
            </label>{" "}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingresa tu nombre completo"
            />
            <label className="form-label fs-5 text-white"> Correo </label>{" "}
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Ingresa tu correo"
            />
            <label htmlFor="phone" className="form-label fs-5 text-white">
              Telefono{" "}
            </label>{" "}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingresa tu teléfono"
            />
            <label htmlFor="phone" className="form-label fs-5 text-white">
              Comentario{" "}
            </label>{" "}
            <textarea
              type="text-area"
              className="form-control mb-3"
              placeholder="Ingresa tu mensaje"
            ></textarea>{" "}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light btn-lg d mt-5"
              >
                Enviar{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
