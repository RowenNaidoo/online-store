import * as React from "react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
