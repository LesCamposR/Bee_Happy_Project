import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Login } from "./component/Login.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RegisterForm } from "./component/registerForm.jsx";
import { ProductList } from "./component/productsList.jsx";
import Us from "./component/Us.jsx";
import Benefits from "./component/Benefits.jsx";
import { Contact } from "./pages/contact";
import { ProductCard } from "./component/productCard.jsx";

// new components Bee Happy
// import RegisterUser from "./component/registerUser.jsx";
// import Contact from "./pages/contact.js";

// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      {" "}
      <BrowserRouter basename={basename}>
        {" "}
        <ScrollToTop>
          {" "}
          <Navbar />{" "}
          <Routes>
            {" "}
            <Route element={<Home />} path="/" />{" "}
            <Route element={<Demo />} path="/demo" />{" "}
            <Route element={<RegisterForm />} path="/registerForm" />{" "}
            <Route element={<ProductList />} path="/productsList" />{" "}
            <Route element={<ProductCard />} path="/productsCard" />{" "}
            <Route element={<Login />} path="/Login" />{" "}
            <Route element={<ProductCard />} path="/productCard" />{" "}
            <Route element={<Us />} path="/Us" />{" "}
            <Route element={<Benefits />} path="/benefits" />{" "}
            <Route element={<Contact />} path="/contact" />{" "}
            <Route element={<Single />} path="/single/:theid" />{" "}
            <Route element={<h1> Not found! </h1>} />{" "}
          </Routes>{" "}
          <Footer />{" "}
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
