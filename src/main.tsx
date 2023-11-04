import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --primary-color: hsl(225deg, 20%, 8%);
    --accent-color: hsl(109deg, 20%, 47%);
    --card-background: linear-gradient(to bottom right, hsl(109deg, 20%, 47%), hsl(240deg, 17%, 70%));
  }

  body {
    background-color: var(--primary-color);
    color: white;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
