import React, { ReactElement } from "react";

import { Product } from "../../types/Product";
import ProductCard from "../ProductCard";
import SC from "./styles";

interface ProductListProps {
  products: Product[] | undefined;
  addToCart: (product: Product) => void;
}

const ProductList = ({
  products = [],
  addToCart,
}: ProductListProps): ReactElement => {
  return (
    <section>
      <SC.ProductList>
        {products?.map((product: Product) => (
          <li key={product.productId}>
            <ProductCard product={product} onButtonClick={addToCart} />
          </li>
        ))}
      </SC.ProductList>
    </section>
  );
};

export default ProductList;
