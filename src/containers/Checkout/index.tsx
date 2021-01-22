import React, { ReactElement } from "react";

import { API_BASE_URL } from "../../constants";
import Button from "../../components/Button";
import { CartSummaryItem } from "../../types/CartSummaryItem";
import Loader from "../../components/Loader";
import { Product } from "../../types/Product";
import SC from "./styles";
import SummaryItem from "../../components/SummaryItem";
import useFetch from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

interface CheckoutProps {
  token: string;
  cart: Product[];
}

type CartSummaryItemMap = {
  [key: string]: CartSummaryItem;
};

type CartSummary = {
  cartSummaryItemMap: CartSummaryItemMap;
  totalPrice: number;
};

const getCartSummary = (cart: Product[]) =>
  cart.reduce(
    (acc: CartSummary, cartItem: Product): CartSummary => {
      const accItem: CartSummaryItem =
        acc.cartSummaryItemMap[cartItem.productId];
      const itemCount = accItem?.count ?? 0;
      return {
        ...acc,
        cartSummaryItemMap: {
          ...acc.cartSummaryItemMap,
          [cartItem.productId]: {
            productId: cartItem.productId,
            name: cartItem.name,
            count: itemCount + 1,
            totalPrice: (itemCount + 1) * cartItem.audPrice,
          },
        },
        totalPrice: acc.totalPrice + cartItem.audPrice,
      };
    },
    { cartSummaryItemMap: {}, totalPrice: 0 }
  );

const Checkout = ({ token, cart }: CheckoutProps): ReactElement => {
  const history = useHistory();
  const { post, response } = useFetch();

  const cartSummary = getCartSummary(cart);

  const backToProducts = () => {
    history.push("/");
  };

  const submitCart = () => {
    post(`${API_BASE_URL}/checkout?token=${token}`, JSON.stringify(cart));
  };

  return (
    <>
      <h1>Checkout</h1>
      {response?.isFetching && (
        <SC.Transition>
          <Loader />
        </SC.Transition>
      )}
      {!response?.isFetching && (
        <SC.Transition>
          <Button
            text="Keep shopping"
            ariaLabel="Keep shopping"
            onClick={backToProducts}
          />
          <SC.CartSummaryList>
            {Object.values(cartSummary.cartSummaryItemMap).map(
              (cartSummaryItem: CartSummaryItem) => (
                <li key={cartSummaryItem.productId}>
                  <SummaryItem
                    description={`${cartSummaryItem.name} x ${cartSummaryItem.count}`}
                    price={cartSummaryItem.totalPrice}
                  />
                </li>
              )
            )}
            <li>
              <SummaryItem
                description="Total"
                price={cartSummary.totalPrice}
                highlight
              />
            </li>
          </SC.CartSummaryList>
          <Button text="Checkout" ariaLabel="Checkout" onClick={submitCart} />
        </SC.Transition>
      )}
      {response?.ok && <SC.Success>Checkout successful!</SC.Success>}
      {response?.error && <SC.Error>{response?.error?.message}</SC.Error>}
    </>
  );
};

export default Checkout;
