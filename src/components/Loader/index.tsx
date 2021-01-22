import React, { ReactElement } from "react";

import SC from "./styles";

const Loader = (): ReactElement => {
  return <SC.Loader data-testid="loader"></SC.Loader>;
};

export default Loader;
