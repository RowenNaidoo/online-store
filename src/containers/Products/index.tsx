import React, { ReactElement, useEffect } from "react";

import { API_BASE_URL } from "../../constants";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { Product } from "../../types/Product";
import ProductList from "../../components/ProductList";
import SC from "./styles";
import useFetch from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

interface ProductsProps {
  token: string;
  cart: Product[];
  addToCart: (selectedProduct: Product) => void;
}

const Products = ({ token, cart, addToCart }: ProductsProps): ReactElement => {
  const history = useHistory();
  const { get, response } = useFetch<Product[]>();
  useEffect(() => {
    get(`${API_BASE_URL}/products?token=${token}`);
  }, [get, token]);

  const checkout = () => {
    history.push("/checkout");
  };

  return (
    <>
      <h1>Products</h1>
      <header>
        <Button
          text={`View cart (${cart.length})`}
          ariaLabel="View cart"
          onClick={checkout}
        />
      </header>
      {response?.isFetching && (
        <SC.Transition>
          <Loader />
        </SC.Transition>
      )}

      {response?.ok && response?.body && (
        <SC.Transition>
          <ProductList products={response?.body} addToCart={addToCart} />
        </SC.Transition>
      )}

      {response?.error && <SC.Error>Error retrieving products</SC.Error>}
    </>
  );
};

export default Products;
