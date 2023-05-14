import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
//import { userActions } from "../store/user";

export const Login = () => {
  const [store, actions] = useState(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí podrías agregar código para verificar las credenciales
    let { respuestaJson, response } = await actions.login(email, password); // call login action
    console.log(response);
    if (response.ok) {
      actions.initialFetchUsersData();
      actions.getUserFavorites();
      // navigate("/"); // redirect to home component
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form className="border rounded p-5" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <p className="text-white-50 mb-5">
          Please enter your login and password!
        </p>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
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
        <button
          type="button"
          className="loginb btn btn-outline-light btn-secondary px-5 "
          onClick={(e) => {
            actions.login(email, password);
          }}
        >
          Iniciar sesión
        </button>
        <Link to="/">
          <button className="btn btn-outline-light btn-secondary px-5">
            Back home
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
