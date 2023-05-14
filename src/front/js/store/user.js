import React, { useContext, useState, useEffect } from "react";

export const userStore = {
  listaUsuarios: [],
  user: {
    msg: "I'm an object",
  },
};

export function userActions(getStore, getActions, setStore) {
  return {
    login: async (email, password) => {
      const store = getStore();
      const actions = getActions();
      console.log("Es la encargada de hacer login del usuario");
      let obj = {
        email: email,
        password: password,
      };

      let { respuestaJson, response } = await actions.useFetch(
        "/login",
        obj,
        "POST"
      );
      console.log(respuestaJson);
      console.log(response.ok);
      /*setStore({
        ...store,
        user: {
          msg: "Usuario logueado",
        },
      });*/

      return store.user;
    },
  };
}
