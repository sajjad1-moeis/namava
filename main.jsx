import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./css/index.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
