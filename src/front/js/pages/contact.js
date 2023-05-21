import React, { useState } from "react";
import background from "../../img/Havies.jpg";

export const Contact = () => {
  const [message, setMessage] = useState("");

  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "0",
        padding: "0",
        minHeight: "100vh",
      }}
    >
      <div className="row justify-content-center p-4">
        <div className="Contanct col-sm-8 col-md-6 col-lg-4 rounded-3 mt-4 p-3">
          <h3 className="text-center text-white title"> Contáctanos </h3>{" "}
          <form>
            <div className="mb-3">
              <label className="form-label fs-5 text-white">
                Nombre Completo{" "}
              </label>{" "}
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu nombre completo"
              />
            </div>{" "}
            <div className="mb-3">
              <label className="form-label fs-5 text-white"> Correo </label>{" "}
              <input
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo"
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fs-5 text-white">
                Teléfono{" "}
              </label>{" "}
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu teléfono"
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fs-5 text-white">
                Comentario{" "}
              </label>{" "}
              <textarea
                className="form-control"
                placeholder="Ingresa tu mensaje"
              ></textarea>{" "}
            </div>{" "}
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mt-5"
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
