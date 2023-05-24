export const userStore = {
  listaUsuarios: [],
  user: {
    msg: "I'm an object",
  },
  user: "",
  userLogin: false,
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
        "/api/login",
        obj,
        "POST"
      );
      //console.log(respuestaJson);
      console.log(response.ok);

      if (response.ok) {
        localStorage.setItem("token", respuestaJson.token);
        sessionStorage.setItem("token", respuestaJson.token);
        let token = localStorage.getItem("token");
        setStore({ ...store, userLogin: true });
        console.log("Login is: True ");
        //console.log("token", token)
      } else {
        console.log("login fallido");
        localStorage.setItem("token", respuestaJson.token);
        sessionStorage.setItem("token", respuestaJson.token);
        let toke = localStorage.getItem("token");
        setStore({ ...store, userLogin: false });
      }

      /*setStore({
        ...store,
        user: {
          msg: "Usuario logueado",
        },
      });*/

      return store.user;
    },
    logout: async () => {
      let actions = getActions();
      let store = getStore();
      let { respuestaJson, response } = await actions.useFetch("/logout");
      if (response.ok) {
        localStorage.setItem("token", respuestaJson.token);
        sessionStorage.setItem("token", respuestaJson.token);
        setStore({ ...store, userLogin: false });
        console.log("token", token);
      }
    },
  };
}
