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
          <Link to="/">
            <span id="products" className="navbar-brand mb-0 h1">
              {" "}
              Inicio{" "}
            </span>{" "}
          </Link>{" "}
          <Link to="/productsList">
            <span id="products" className="navbar-brand mb-0 h1">
              {" "}
              Productos{" "}
            </span>{" "}
          </Link>{" "}
          <Link to="/Us">
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
          <Link to="/ShoppingCart">
            <button className="btn border rounded-pill">
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>{" "}
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>{" "}
          </Link>{" "}
          <Link to="/Order">
            <button className="btn border rounded-pill">
              {" "}
              <i class="fa-solid fa-shop"></i>{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
