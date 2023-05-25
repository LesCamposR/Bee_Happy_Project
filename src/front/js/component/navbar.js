import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";

import "../../styles/navbar.css";

export const Navbar = () => {
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
    <nav className="navbar navbar-light navbar-expand-lg container-fluid">
      <div className="container w-auto">
        <Link to="/" className="navbar-brand">
          {" "}
          <img src={Logo} className="" style={{ width: "10rem" }} />
        </Link>
      </div>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-muted"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbar-menu"
        >
          <ul className="navbar-nav me-2">
            <li className="nav-item">
              <Link to="/">
                {" "}
                <span id="home" className="navbar-brand mb-0 h1">
                  Inicio
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productsList">
                <span id="products" className="navbar-brand mb-0 h1">
                  {" "}
                  Productos{" "}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Us">
                <span className="navbar-brand mb-0 h1"> Conocenos </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <span className="navbar-brand mb-0 h1"> Contacto </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registerForm">
                <span id="crear-cuenta" className="navbar-brand mb-0 h1">
                  {" "}
                  Crear cuenta{" "}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container w-auto">
        <div className="ml-auto">
          <Link to="/Login">
            <button className="btn btn-sm btn-light me-2 ps-3 pe-3" id="login">
              Iniciar Sesion
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          {store.userLogin ? (
            <button
              className="btn btn-sm btn-light me-2 ps-3 pe-3"
              id="logout"
              onClick={(e) => {
                actions.logout();
              }}
            >
              Logout
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="btn-group">
          <a
            type="button"
            className="btn btn-sm btn-danger dropdown-toggle"
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
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      alert("¡Compra realizada!");
                      actions.clearFavorites();
                    }}
                  >
                    Comprar
                  </button>
                </li>
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
