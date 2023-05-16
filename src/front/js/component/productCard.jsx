import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductCard = ({ product }) => {
  console.log(product.title);

  useEffect(() => {
    //const data =
  }, []);

  return (
    <>
      console.log(product)
      <h1>{product.title}</h1>
      Soy el componente ProductCard
    </>
  );
};

