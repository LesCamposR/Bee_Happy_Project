import React, { useState } from "react";
import background from "../../img/Havies.jpg";

export const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
        height: "100vh",
      }}
    >
      <div className=" row justify-content-center p-4">
        <div className="Contanct col-sm-4 rounded-3 mt-4 p-3">
          <h3 className="row justify-content-center text-white title">
            Contáctanos
          </h3>
          <form>
            <label className="form-label fs-5 text-white">
              Nombre Completo
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingresa tu nombre completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label className="form-label fs-5 text-white"> Correo </label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone" className="form-label fs-5 text-white">
              Telefono
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingresa tu teléfono"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="phone" className="form-label fs-5 text-white">
              Comentario
            </label>
            <textarea
              type="text-area"
              className="form-control mb-3"
              placeholder="Ingrese su mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light btn-lg d mt-5"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
