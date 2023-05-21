import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import background from "../../img/frames.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);
  /*useEffect(() => {
    console.log(password);
  }, [password]);*/

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <form className="Login border rounded p-5 text-white">
        <h1>Iniciar Sesión</h1>
        <p className="text-white-50 mb-5">
          Por favor ingresa tu correo y contraseña
        </p>
        <div className="form-group text-white">
          <label htmlFor="email">Ingresa tu correo:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group text-white">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <Link to="/productsList">
          <button
            type="button"
            className="loginb btn btn-outline-light  px-5 "
            onClick={(e) => {
              actions.login(email, password);
            }}
          >
            Iniciar sesión
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline-light px-5">
            Volver a inicio
          </button>
        </Link>
      </form>
    </div>
  );
};
