import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel, Card } from "react-bootstrap";
import "../../styles/home.css";
import { ProductCard } from "./productCard.jsx";

const products = [
  {
    id: 1,
    title: "Honey 1",
    text: "Contenido de la tarjeta 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Honey 2",
    text: "Contenido de la tarjeta 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Honey 3",
    text: "Contenido de la tarjeta 3",
    image: "https://via.placeholder.com/150",
  },
];

export const ProductList = () => {
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState(products);

  const handleDetails = () => {
    // Ir al otro componente card individual
    //console.log("Quiero Cruzar");
    <ProductCard data={product} />;
    console.log("Mostrando detalles del producto seleccionado");
  };
  return (<>
    <Carousel activeIndex={index} onSelect={setIndex}>
      {products.map((product, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 carousel-image"
            src={product.image}
            alt={product.title}
          />
          <Carousel.Caption className="text-center">
            <h3 className="mt-3 mb-2">{product.title}</h3>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              {product.text}
            </p>
            <Link to="/productCard" className=" btn btn-outline-dark btn-lg">Detalles!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel >

  </>);
};
