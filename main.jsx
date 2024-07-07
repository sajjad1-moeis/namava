import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./Style/Tailwind.css";
import "./Style/index.css";
import {BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
