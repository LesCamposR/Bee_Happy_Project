export const favoritesStore = {
    favorites: [], // [{name:"Luke", uid:1, categoria:"people", link:"/people/1"},{}]
};

export function favoritesActions(getStore, getActions, setStore) {
    return {
        addFavorite: async (objeto) => {
            let store = getStore();
            let arrTemp = store.favorites.slice(); // Copia el estado centralizado

            if (arrTemp.some((item) => item.name === objeto.name)) {
                return; // Sale de la función aquí si el favorito ya existe
            }

            arrTemp.push(objeto);
            setStore({ ...store, favorites: arrTemp }); // Actualiza el estado centralizado con el nuevo favorito
            return true;
        },

        deleteFavorite: async (id) => {
            let store = getStore();
            let arrTemp = store.favorites.slice(); // Copia el estado centralizado

            const index = arrTemp.findIndex((item) => item.id === id);
            if (index === -1) {
                return; // Sale de la función aquí si el favorito no existe
            }

            arrTemp.splice(index, 1);
            setStore({ ...store, favorites: arrTemp }); // Actualiza el estado centralizado eliminando el favorito
            return true;
        },

        setFavoriteQuantity: async (id, quantity) => {
            let store = getStore();
            let arrTemp = store.favorites.slice(); // Copio el estado centralizado

            const index = arrTemp.findIndex((item) => item.id === id);
            if (index === -1) {
                return; // Sale de la función aquí
            }

            arrTemp[index].quantity = quantity;
            setStore({ ...store, favorites: arrTemp });
            return true;
        },
        clearFavorites: async () => {
            setStore({ favorites: [] }); // Vacía el arreglo de favoritos en el estado centralizado
            return true;
        },
    };
}