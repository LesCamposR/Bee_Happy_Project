import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Beeplay from "../component/beeplay.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return <div className="text-center mt-5">{Beeplay}</div>;
};
