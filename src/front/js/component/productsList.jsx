import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel, Card } from "react-bootstrap";
import "../../styles/home.css";
import { ProductCard } from "./productCard.jsx";
import Bottle2 from "../../img/Bottle2.jpg";
import Medium from "../../img/Medium.jpg";
import Small from "../../img/Small.jpg";

const products = [
  {
    id: 1,
    title: "Botella",
    text: "100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.",
    price: 6000,
    image: Bottle2,
    buttonD: "/productCard/1"
  },
  {
    id: 2,
    title: "Jarra Mediana",
    text: "100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.",
    price: 4500,
    image: Medium,
    buttonD: "//2"
  },
  {
    id: 3,
    title: "Jarra Pequena",
    text: "100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.",
    price: 3500,
    image: Small,
    buttonD: "/productCard/3"
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
  return (
    <>
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
              <Link to= {product.buttonD} className="btn btn-outline-dark btn-lg">
                Detalles!
              </Link>
              <button type="button" className="btn btn-outline-dark btn-lg" onClick={() => {
                <productCard key={idx} product={product}/>
              }}>Add to Cart</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
