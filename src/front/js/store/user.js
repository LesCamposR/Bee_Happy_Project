export const userStore = {
  listaUsuarios: [],
  usuario: {
    msg: "I'm an object",
  },
};

export function userActions(getStore, getActions, setStore) {
  return {
    login: async () => {
      const store = getStore();
      console.log("Es la encargada de hacer login del usuario");

      setStore({
        ...store,
        usuario: {
          msg: "Usuario logueado",
        },
      });

      return store.usuario;
    },
  };
}
