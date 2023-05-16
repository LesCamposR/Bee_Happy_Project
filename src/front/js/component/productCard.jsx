import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Bottle from "../../img/Bottle.jpg";
import Bottle2 from "../../img/Bottle2.jpg";
import Arte3 from "../../img/Arte3.png";
import Logo from "../../img/Logo.png";

export const ProductCard = ({ product }) => {


    return (<>
        <div class="alert alert-warning" role="alert">
            A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="h-100 bg-light">
            <div className="row">


                <div className="col-3 bg-light justify-content-center mt-4 p-4">
                    <img width="100%" src={Logo} alt="Logo" className="m-2" />
                </div>
                <div className="col bg-light d-flex justify-content-center mt-4 p-4">
                    <div className="card p-4" style={{ width: "35rem" }}>


                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Bottle2} className="d-block w-100 rounded" alt="bottleofHoney" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Bottle} className="d-block w-100" alt="bottleofHoney" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Bottle2} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                        <div className="card-body ">
                            <h5 className="card-title">Miel de Abeja</h5>
                            <p className="card-text" >
                                100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Precio: ₡</li>
                            <li className="list-group-item">Cantidad: g</li>

                        </ul>
                        <div className="card-body">
                            <div className="row d-flex">
                                <div className="col-6">
                                    <a className="btn btn-outline-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        More
                                    </a>
                                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">BeHappy</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <div>
                                                <img width="100%" src="./Bottle2.jpg" alt="bottleofHoney" />
                                            </div>
                                            <div className="dropdown mt-3">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                    Opciones
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li> <Link to="/" className="dropdown-item">Inicio</Link> </li>
                                                    <li><a className="dropdown-item" href="#">Productos</a></li>
                                                    <li> <Link to="/Benefits" className="dropdown-item">Beneficios</Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 d-flex">
                                    <div className="col text-center ">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Qty</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="7">+</option>
                                        </select>
                                    </div>
                                    <div className="col text-center "><button type="button" className="btn btn-outline-dark">Add to Cart</button></div>
                                </div>
                            </div>

                        </div>
                        <div className="row d-flex ">
                            <div className="col-6  d-flex">
                                <div className="col d-flex text-center justify-content-center">
                                    <i className="fa-regular fa-heart fs-4 m-1" style={{ color: "#304a4b" }}></i>
                                    <i className="fa-brands fa-facebook fs-4 m-1" style={{ color: "#304a4b" }}></i>
                                    <i className="fa-brands fa-instagram fs-4 m-1" style={{ color: "#304a4b" }}></i>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@info@lescampos.com">Info@lescampos.com</button>

                                </div>
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="col-3 bg-light justify-content-center mt-4 p-4">
                    <img width="80%" src={Arte3} alt="Arte3" />
                </div>
            </div>
        </div >
    </>)
}
