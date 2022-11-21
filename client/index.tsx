import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";

console.log("TESTE", import.meta.env.MODE, import.meta.env.BASE_URL);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
