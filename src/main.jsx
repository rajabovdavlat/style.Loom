import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/roboto";
import "./index.css";

import { CartProvider } from "./context/CartContext"; 
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </StrictMode>
);
