import React, { ReactElement } from "react";

import SC from "./styles";

interface ButtonProps {
  text: string;
  onClick: (e: Event) => void;
  ariaLabel: string;
}

const Button = ({ text, onClick, ariaLabel }: ButtonProps): ReactElement => {
  return (
    <SC.Button onClick={onClick} aria-label={ariaLabel}>
      {text}
    </SC.Button>
  );
};

export default Button;
