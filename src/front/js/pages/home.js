import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Havies from "../../img/Havies.jpg";
import frames from "../../img/frames.jpg";
import { Beeplay } from "../../js/component/beeplay.jsx";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="alert alert-success" role="alert">
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
        <div className="col-4 bg-light text-center ">
          <div className="alert alert-warning m-4" role="alert">
<<<<<<< HEAD
            A simple warning alert—check it out!
=======
            Quieres saber que tipo de abeja eres hoy?
>>>>>>> Developer
          </div>
        </div>
        <div className="col-8 bg-light text-center ">
          <Beeplay />
        </div>
      </div>
<<<<<<< HEAD
      <div className="row justify-content-start d-flex">
        <div className="col-6 bg-light justify-content-center mt-4 p-4">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> .
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
=======

>>>>>>> Developer
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
