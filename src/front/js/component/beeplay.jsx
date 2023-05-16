import React, { useState } from "react";
import "../../styles/home.css";
import abejaGuerreraImage from "../../img/abeja-guerrera.jpg";
import abejaentusiasta from "../../img/abeja-entusiasta.jpg";
import abejatrabajadora from "../../img/abeja-trabajadora.jpg";
import abejareina from "../../img/abeja-reina.jpg";

const Beeplay = () => {
    const [randomMsg, setRandomMsg] = useState("");
    const [randomImage, setRandomImage] = useState("");

    const messages = [
        "Soy una abeja guerrera",
        "Soy una abeja reina",
        "Soy una abeja trabajadora",
        "Soy una abeja entusiasta"
    ];

    const images = [
        abejaGuerreraImage,
        abejareina,
        abejatrabajadora,
        abejaentusiasta
    ];

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

export default Beeplay;