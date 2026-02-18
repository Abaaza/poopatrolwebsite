import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

import theme from "./components/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
