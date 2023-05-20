export const shoppingCartStore = {
  choosenProdust: [],
};

export function shoppingCartActions(getStore, getActions, setStore) {
  return {
    addProduct: async (objeto) => {
      let store = getStore();
      let arrTemp = store.choosenProdust.slice(); //copio el estado centralizado

      if (arrTemp.length > 0) {
        for (let i = 0; i < arrTemp.length; i++) {
          if (arrTemp[i]["name"] == objeto.name) {
            return; //saldría de la función aquí
          }
        }
      }

      arrTemp.push(objeto);
      setStore({ ...store, choosenProdust: arrTemp }); // [..favoritos, objeto]
      return true;
    },
    deleteFavorite: async (index) => {
      let store = getStore();
      let arrTemp = store.choosenProdust.slice();
      arrTemp.splice(index, 1);
      setStore({ ...store, choosenProdust: arrTemp });
    },
  };
}
