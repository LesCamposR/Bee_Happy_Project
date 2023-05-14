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
      console.log("Es la encargada de hacer login del usuario");

      setStore({
        ...store,
        user: {
          msg: "Usuario logueado",
        },
      });

      return store.user;
    },
  };
}
