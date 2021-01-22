import "./styles.css";

import React, { useContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./containers/Checkout";
import { Product } from "./types/Product";
import Products from "./containers/Products";

export default function App() {
  const token = "e619b58222f69334d640725b3b78e3cfd66a";

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Products token={token} cart={cart} addToCart={addToCart} />
        </Route>
        <Route exact path="/checkout">
          <Checkout token={token} cart={cart} />
        </Route>
      </Switch>
    </main>
  );
}
