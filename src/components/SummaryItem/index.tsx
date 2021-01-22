import React, { ReactElement } from "react";

import { CartSummaryItem } from "../../types/CartSummaryItem";
import SC from "./styles";
import { formatPrice } from "../../utils";

interface SummaryItemProps {
  description: string;
  price: number;
  highlight?: boolean;
}

const SummaryItem = ({
  description,
  price,
  highlight = false,
}: SummaryItemProps): ReactElement => {
  return (
    <SC.Container highlight={highlight}>
      <SC.Description>{description}</SC.Description>
      <SC.Price>{formatPrice(price)}</SC.Price>
    </SC.Container>
  );
};

export default SummaryItem;
