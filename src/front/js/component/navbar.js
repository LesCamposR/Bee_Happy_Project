import React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "./registerForm.jsx";
import { ProductList } from "./productsList.jsx";

import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div>
          <Link to="/productsList">
            <span id="products" className="navbar-brand mb-0 h1">
              {" "}
              Productos{" "}
            </span>{" "}
          </Link>{" "}
          <Link to="/">
            <span className="navbar-brand mb-0 h1"> Conocenos </span>{" "}
          </Link>{" "}
          <Link to="/contact">
            <span className="navbar-brand mb-0 h1"> Contacto </span>{" "}
          </Link>{" "}
          <Link to="/registerForm">
            <span id="crear-cuenta" className="navbar-brand mb-0 h1">
              Crear cuenta{" "}
            </span>{" "}
          </Link>{" "}
        </div>{" "}
        <div className="ml-auto">
          <Link to="/Login">
            <button className="btn border rounded-pill">
              {" "}
              Iniciar Sesion{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
