import React, { useState } from "react";
import "../../styles/home.css";
import abejaGuerreraImage from "../../img/abeja-guerrera.jpg";
import abejaEntusiastaImage from "../../img/abeja-entusiasta.png";
import abejaTrabajadoraImage from "../../img/abeja-trabajadora.png";
import abejaReinaImage from "../../img/abeja-reina.png";

export const Beeplay = () => {
    const [randomMsg, setRandomMsg] = useState("");
    const [randomImage, setRandomImage] = useState("");

    const messages = [
        "Soy una abeja guerrera, un líder natural, capaz de tomar decisiones y darlo todo por su grupo",
        "Soy una abeja reina, soy parte de la realeza, pero nunca abandono a mi familia",
        "Soy una abeja trabajadora, no hay nada que no podamos hacer, nuestro esfuerzo en conjunto crea maravillas",
        "Soy una abeja entusiasta, cada granito de arena que aportas en la vida contribuye a una buena causa"
    ];

    const images = [
        abejaGuerreraImage,
        abejaReinaImage,
        abejaTrabajadoraImage,
        abejaEntusiastaImage
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
            <button className="btn btn-warning" onClick={generateRandomMsg}>TRY ME</button>
            <p>{randomMsg}</p>
            {randomImage && (
                <img
                    src={randomImage}
                    alt="Imagen"
                    style={{ width: "200px", height: "auto" }}
                />
            )}
        </div>
    );
};

export default Beeplay;