import { userStore, userActions } from "./user";
import { favoritesStore, favoritesActions } from "./favorites.jsx";
import { Form } from "react-bootstrap";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      ...userStore,
      ...favoritesStore,
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
      ...favoritesActions(getStore, getActions, setStore),
      useFetch: async (endpoint, body, method = "GET") => {
        let url = process.env.BACKEND_URL + endpoint;
        console.log(url);
        let response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
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
