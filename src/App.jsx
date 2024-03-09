import React, {useState, useEffect} from "react";
import "../css/index.css";
import "../css/App.css";
import {useRoutes} from "react-router-dom";
import Header from "./components/Header/header";
import Routes from "./routes";
export default function App() {
   let routes = useRoutes(Routes);
   return (
      <div>
         <Header />
         {routes}
      </div>
   );
}
