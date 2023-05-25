import React, { useState } from "react";
import { Link } from "react-router-dom";
import frames2 from "../../img/frames2.jpg";

const Benefits = () => {
  return (
    <>
      <div className="row">
        <div className="col-4 bg-light justify-content-center mt-4 p-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                ¿Qué beneficios para la salud trae consumir miel?
              </h3>
              <p className="card-text">
                “La miel es un alimento nutritivo, saludable y natural producido
                por las abejas. Sus propiedades benéficas van más allá del uso
                como dulcificante, ya que es rico en sales minerales,
                enzimas, vitaminas y proteínas que le donan propiedades
                nutritivas y organolépticas únicas”
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Se trata de un alimento que se consume desde la antigüedad y
                  al que se le adjudican numerosas bondades.
                </small>
              </p>
            </div>
            <img src={frames2} className="card-img-bottom" alt="..." />
          </div>
        </div>

        <div className="col-8 bg-light justify-content-center mt-4 p-4">
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
                  <h4>Colabora en el tratamiento de las heridas:</h4>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <strong>La Miel de Abeja</strong> se ha utilizado a lo largo
                  de los años para tratar heridas, picaduras de insectos,
                  quemaduras, trastornos de la piel, llagas.
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
                  <h4>Presenta beneficios gastrointestinales:</h4>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>La Miel de Abeja</strong> está compuesta por enzimas
                  que facilitan la absorción de moléculas, como azúcares y
                  almidón. Además, este producto “proporciona
                  algunos nutrientes, como minerales, fitoquímicos y
                  flavonoides, que ayudan a los procesos digestivos del cuerpo”.
                  Incluso la miel pura tiene propiedades bactericidas contra
                  bacterias patógenas y enteropatógenos.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <h4>Es efectiva contra la tos y el dolor de garganta:</h4>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>La Miel de Abeja</strong> puede ser eficaz en el
                  tratamiento del dolor de garganta gracias a sus propiedades
                  antiinflamatorias, antivirales y antifúngicas. A su vez, “la
                  miel es superior a otros tratamientos para la tos inducida por
                  infecciones de las vías respiratorias superiores”.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <h4>Actúa contra la gastritis y la úlcera péptica:</h4>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>La Miel de Abeja</strong> es un potente inhibidor de
                  la gastritis (irritación e inflamación del revestimiento de la
                  pared del estómago) y del agente causante de la úlcera péptica
                  (erosiones o úlceras dolorosas abiertas en el revestimiento
                  del estómago o del duodeno).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Benefits;
