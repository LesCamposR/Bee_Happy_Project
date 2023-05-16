import React, {
    useContext
} from "react";
import {
    Context
} from "../store/appContext";
import Havies from "../../img/Havies.jpg";
import frames from "../../img/frames.jpg";
import "../../styles/home.css";
import {
    Link
} from "react-router-dom";

export const Home = () => {
    const {
        store,
        actions
    } = useContext(Context);

    return ( <
        div className = "text-center mt-5" >
        <
        h1 > Hello Bee Happy!! < /h1> <
        p >
        <
        img src = {
            rigoImageUrl
        }
        /> <
        /p> <
        div className = "alert alert-info" > {
            store.message ||
            "Loading message from the backend (make sure your python backend is running)..."
        } <
        /div> <
        p >
        This boilerplate comes with lots of documentation: {
            " "
        } <
        a href = "https://start.4geeksacademy.com/starters/react-flask" >
        Read documentation <
        /a> <
        /p> <
        /div>
    );
};