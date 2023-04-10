import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
// import "./index.css";
import "virtual:uno.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
