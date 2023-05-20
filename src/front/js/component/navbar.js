<<<<<<< HEAD
import React from "react";
import {
    Link
} from "react-router-dom";
import {
    RegisterForm
} from "./registerForm.jsx";
import {
    ProductList
} from "./productsList.jsx";
=======
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { RegisterForm } from "./registerForm.jsx";
import { ProductList } from "./productsList.jsx";
>>>>>>> Developer

import "../../styles/navbar.css";

export const Navbar = () => {
<<<<<<< HEAD
    return ( <
        nav className = "navbar navbar-light" >
        <
        div className = "container" >
        <
        div >
        <
        Link to = "/" >
        <
        span id = "products"
        className = "navbar-brand mb-0 h1" > {
            " "
        }
        Inicio {
            " "
        } <
        /span>{" "} <
        /Link>{" "} <
        Link to = "/products" >
        <
        span id = "products"
        className = "navbar-brand mb-0 h1" > {
            " "
        }
        Productos {
            " "
        } <
        /span>{" "} <
        /Link>{" "} <
        Link to = "/Us" >
        <
        span className = "navbar-brand mb-0 h1" > Conocenos < /span>{" "} <
        /Link>{" "} <
        Link to = "/contact" >
        <
        span className = "navbar-brand mb-0 h1" > Contacto < /span>{" "} <
        /Link>{" "} <
        Link to = "/registerForm" >
        <
        span id = "crear-cuenta"
        className = "navbar-brand mb-0 h1" >
        Crear cuenta {
            " "
        } <
        /span>{" "} <
        /Link>{" "} <
        /div>{" "} <
        div className = "ml-auto" >
        <
        Link to = "/Login" >
        <
        button className = "btn border rounded-pill" > {
            " "
        }
        Iniciar Sesion {
            " "
        } <
        /button>{" "} <
        /Link>{" "} <
        /div>{" "} <
        /div>{" "} <
        /nav>
    );
};
=======
  const { store, actions } = useContext(Context);

  // Obtener la cantidad de cada producto en el carrito
  const getProductQuantity = (productId) => {
    const favorite = store.favorites.find((item) => item.id === productId);
    return favorite ? favorite.quantity : 0;
  };

  // Obtener el precio total de un producto en el carrito
  const getProductTotalPrice = (productId) => {
    const favorite = store.favorites.find((item) => item.id === productId);
    return favorite ? favorite.quantity * favorite.price : 0;
  };

  // Obtener el precio total del carrito
  const getTotalPrice = () => {
    let totalPrice = 0;
    store.favorites.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div>
          <Link to="/">
            <span id="products" className="navbar-brand mb-0 h1">
              Inicio
            </span>
          </Link>
          <Link to="/productsList">
            <span id="products" className="navbar-brand mb-0 h1">
              Productos
            </span>
          </Link>
          <Link to="/Us">
            <span className="navbar-brand mb-0 h1">Conocenos</span>
          </Link>
          <Link to="/contact">
            <span className="navbar-brand mb-0 h1">Contacto</span>
          </Link>
          <Link to="/registerForm">
            <span id="crear-cuenta" className="navbar-brand mb-0 h1">
              Crear cuenta
            </span>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/Login">
            <button className="btn border rounded-pill">Iniciar Sesion</button>
          </Link>
        </div>
        <div className="btn-group">
          <a
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shoppingcart {store.favorites.length}
          </a>
          <ul
            className="dropdown-menu list-unstyled"
            aria-labelledby="navbarDropdown"
          >
            {store.favorites && store.favorites.length > 0 ? (
              <>
                {store.favorites.map((item, index) => {
                  return (
                    <li key={index} to={item.link}>
                      {item.name} ({getProductQuantity(item.id)}) - $
                      {getProductTotalPrice(item.id)}
                      <p
                        className="ocultar"
                        type="button"
                        onClick={() => {
                          actions.deleteFavorite(item.id);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </p>
                    </li>
                  );
                })}
                <li>Total: ${getTotalPrice()}</li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
>>>>>>> Developer
