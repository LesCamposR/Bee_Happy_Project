import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Havies from "../../img/Havies.jpg";
import frames from "../../img/frames.jpg";
import { Beeplay } from "../../js/component/beeplay.jsx";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Bottle2 from "../../img/Bottle2.jpg";
import Medium from "../../img/Medium.jpg";
import Small from "../../img/Small.jpg";
import { Contact } from "./contact";
import Info from "../../js/component/Info.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="alert alert-success text-center" role="alert">
        <h4 className="alert-heading m-2">
          Bienvenido! <Info />{" "}
        </h4>
        <p className="m-1">
          Estamos felices que formes parte de nuestro proyecto, Gracias por
          adquirir nuestros productos. Esperamos que tu experiencia con nosotros
          sea extraordinaria.
        </p>
        <br />
        <p className="mb-0 m-1">
          Con tu suscripción/compra de nuestros{" "}
          <Link to="/productsList">Products</Link> ayudas a mantener vivo este
          sueño.
        </p>
      </div>
      <div className="row justify-content-center d-flex">
        <div className="col-4 bg-light text-center ">
          <div className="alert alert-warning m-4" role="alert">
            Quieres saber que tipo de abeja eres hoy?
          </div>
        </div>
        <div className="col-8 bg-light text-center ">
          <Beeplay />
        </div>
      </div>
      <br />
      <div className="row justify-content-center d-flex">
        <div className="col-6 bg-light text-center ">
          <img src={Havies} className="img-fluid" alt="..."></img>
        </div>
        <div className="col-6 bg-light text-center ">
          <img src={frames} className="img-fluid" alt="..."></img>
        </div>
      </div>
    </>
  );
};
