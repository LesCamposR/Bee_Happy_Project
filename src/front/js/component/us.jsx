import React, { useState } from 'react';
import beach from "../../img/beach.jpg"
import Sunset from "../../img/Sunset.jpg"

const Us = () => {

    return (<>
    
        <div className="row justify-content-start">
            <div className="col-6 bg-light d-flex justify-content-center mt-4 p-4">
                <div className="card bg-dark text-white">
                    <img src={Sunset} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Somos transparentes, diligentes y llenos de buena energía,</h5>
                        <p className="card-text">apacionados de la naturaleza y de todo lo que nos ofrece en sus diferentes formas, tenemos una vison y objetivos claros, nos identificamos con valores y nos regimos por principios, confiamos en la disciplina y en la constancia.</p>
                        <p className="card-text">BeeHappy</p>
                    </div>
                </div>
            </div>
            <div className="col-6 bg-light d-flex justify-content-center mt-4 p-4">
                <div className="card bg-dark text-white">
                    <img src={beach} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Somos una idea, un sueño, un emprendimiento, </h5>
                        <p className="card-text">y buscamos impactar positivamente, ayudar y aportar a nuestra familia, comunidad, clientes y emprendedores con nuestros, servicios y productos de calidad: naturales, origanicos, producidos locamente con amor y pasión. </p>
                        <p className="card-text">BeeHappy</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="row justify-content-center">
            <div className="col-8">
                <div class="card">
                    <div class="card-header">
                        Recuerda
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>Confía tienes un gran futuro, que con un plan será mejor, esos sueños, esas metas esa es tu visión, todo está en ti no busques afuera. Toma un día a la vez. Sé valiente, Sé fuerte que es posible! </p>
                            <footer class="blockquote-footer">Omnipontente<cite title="Source Title"> by LesCampos </cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>


    </>)

}
export default Us