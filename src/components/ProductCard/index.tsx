import React, { ReactElement } from "react";

import Button from "../Button";
import { Product } from "../../types/Product";
import SC from "./styles";
import { formatPrice } from "../../utils";

interface ProductCardProps {
  product: Product;
  onButtonClick: (selectedProduct: Product) => void;
}

const ProductCard = ({
  product,
  onButtonClick,
}: ProductCardProps): ReactElement => {
  return (
    <SC.Container>
      <SC.Name>{product?.name}</SC.Name>
      <SC.Description>{product?.description}</SC.Description>
      <SC.Price>{formatPrice(product?.audPrice)}</SC.Price>
      <SC.ButtonContainer>
        <Button
          text="Add to cart"
          ariaLabel="Add to cart"
          onClick={() => onButtonClick(product)}
        />
      </SC.ButtonContainer>
    </SC.Container>
  );
};

export default ProductCard;
