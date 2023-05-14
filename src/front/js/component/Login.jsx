import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { userActions } from "../store/user";

const Login = () => {
  const [store, actions] = useState(Context);
  //const [def, funciones] = useContext(userActions)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form className="border rounded p-5">
        <h1>Iniciar Sesión</h1>
        <p className="text-white-50 mb-5">
          Please enter your email and password!
        </p>
        <div className="form-group">
          <label htmlFor="email">Enter your Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
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