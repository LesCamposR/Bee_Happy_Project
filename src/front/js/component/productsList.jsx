import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import Bottle from "../../img/Bottle.jpg";
import Bottle2 from "../../img/Bottle2.jpg";
import Medium from "../../img/Medium.jpg";
import Small from "../../img/Small.jpg";

const products = [
  {
    id: 1,
    name: "Botella",
    text: "100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.",
    price: 6000,
    image: Bottle2,
    quantity: 0
  },
  {
    id: 2,
    name: "Jarra Mediana",
    text: "100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.",
    price: 4500,
    image: Medium,
    quantity: 0
  },
  {
    id: 3,
    name: "Jarra Pequena",
    text: "100% natural, localmente producida, de gran textura, aroma y color, con una amplia diversidad nutritiva.",
    price: 3500,
    image: Small,
    quantity: 0
  }
];

export const ProductList = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  const isProductFavorite = (productId) => {
    return favorites.some((favorite) => favorite.id === productId);
  };

  const handleLikeClick = (productId) => {
    const product = products.find((item) => item.id === productId);

    if (isProductFavorite(productId)) {
      actions.deleteFavorite(productId);
    } else {
      if (product) {
        actions.addFavorite({ ...product, quantity: 1 });
        product.quantity = 1; // Actualizar cantidad en productos
      }
    }
  };

  const handleIncrement = (productId) => {
    const favorite = favorites.find((item) => item.id === productId);
    const product = products.find((item) => item.id === productId);

    if (favorite && product) {
      actions.setFavoriteQuantity(productId, favorite.quantity + 1);
      product.quantity = favorite.quantity + 1; // Actualizar cantidad en productos
    }
  };

  const handleDecrement = (productId) => {
    const favorite = favorites.find((item) => item.id === productId);
    const product = products.find((item) => item.id === productId);

    if (favorite && product && favorite.quantity > 0) {
      actions.setFavoriteQuantity(productId, favorite.quantity - 1);
      product.quantity = favorite.quantity - 1; // Actualizar cantidad en productos
    }
  };

  return (
    <>
      <div className="h-100 bg-light">
        <div className="row d-flex flex-wrap justify-content-center">
          {products.map((product) => {
            const favorite = favorites.find((item) => item.id === product.id);

            return (
              <div className="col-3 bg-light justify-content-center mt-4 p-4" key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <p
                      type="button"
                      role="button"
                      variant="primary"
                      onClick={() => handleLikeClick(product.id)}
                      className={`fs-3 fa ${isProductFavorite(product.id) ? "fa-cart-shopping text-success" : "fa-solid fa-cart-shopping"}`}
                    ></p>
                    <div className="d-flex align-items-center">
                      <Button variant="secondary" size="sm" onClick={() => handleDecrement(product.id)}>
                        -
                      </Button>
                      <div className="mx-2">{favorite ? favorite.quantity : 0}</div>
                      <Button variant="secondary" size="sm" onClick={() => handleIncrement(product.id)}>
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
