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

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="alert alert-success text-center" role="alert">
        <h4 className="alert-heading m-2">Bienvenido!</h4>
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
        <div className="col-4 bg-light text-start ">
          <div class="alert alert-warning m-4" role="alert">
            Nutricionalmente hablando Una cucharada de miel (21 gramos) puede
            contener lo siguiente: 64 calorías. 17 gramos de azúcar, incluidas
            la fructosa, la glucosa, maltosa y sucrosa. Está prácticamente libre
            de fibra, grasa o proteína. Vitaminas y minerales en cantidades
            pequeñas. Antioxidantes.
          </div>
        </div>
        <div className="col-8 bg-light text-center ">
          <Beeplay />
        </div>
      </div>
      <div className="row justify-content-start d-flex">
        <div className="col-6 bg-light text-start mt-4 p-4">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Dato curioso
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <strong>La Abeja</strong> es el único insecto que produce
                  alimentos consumidos por el hombre.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Dato curioso
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <strong>Una onza,</strong> se necesita una onza de miel para
                  impulsar el vuelo de una abeja alrededor del mundo.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Dato curioso
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <strong>la Reina</strong> la reina puede poner de 600 a 800 o
                  incluso 1500 huevos cada día durante sus 3 o 4 años de vida.
                </div>
              </div>
            </div>
          </div>
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
