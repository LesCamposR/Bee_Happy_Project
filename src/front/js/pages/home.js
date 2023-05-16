import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import abeja1 from "../../img/abeja-guerrera.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [randomMsg, setRandomMsg] = useState("");
  const [randomImage, setRandomImage] = useState("");

  const messages = [
    "Soy una abeja guerrera",
    "Soy una abeja reina",
    "Soy una abeja trabajadora",
    "Soy una abeja entusiasta",
  ];

  const images = [abeja1, imagen2, imagen3, imagen4];

  const generateRandomMsg = () => {
    const randomMsgIndex = Math.floor(Math.random() * messages.length);
    const randomMsg = messages[randomMsgIndex];
    const randomImage = images[randomMsgIndex];

    setRandomMsg(randomMsg);
    setRandomImage(randomImage);
  };

  return (
    <div>
      <button onClick={generateRandomMsg}>GET A MSG</button>
      <p>{randomMsg}</p>
      {randomImage && <img src={randomImage} alt="Imagen" />}
    </div>
  );
};

export default Home;
