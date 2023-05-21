import { userStore, userActions } from "./user";
<<<<<<< HEAD
=======
import {
  shoppingCartStore,
  shoppingCartActions,
} from "../component/ShoppingCard.js";
import { favoritesStore, favoritesActions } from "./favorites.jsx";
>>>>>>> Developer
import { Form } from "react-bootstrap";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      ...userStore,
<<<<<<< HEAD
=======
      ...shoppingCartStore,
      ...favoritesStore,
>>>>>>> Developer
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getMessage: () => {
        // function body
        console.log("Get Messaged");
      },
      ...userActions(getStore, getActions, setStore),
<<<<<<< HEAD
=======
      ...shoppingCartActions(getStore, getActions, setStore),
      ...favoritesActions(getStore, getActions, setStore),
>>>>>>> Developer
      useFetch: async (endpoint, body, method = "POST") => {
        let url = process.env.BACKEND_URL + endpoint;
        console.log(url);
        let response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
        });
        let respuestaJson = await response.json();
        return {
          respuestaJson,
          response,
        };
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();
        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        //reset the global store
        setStore({
          demo: demo,
        });
      },
    },
  };
};
export default getState;
