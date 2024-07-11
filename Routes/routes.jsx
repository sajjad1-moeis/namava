import Home from "../src/Pages/Home";
import SingleMovie from "../src/Pages/SingleMovie";

const routes = [
   {path: "/", element: <Home />},
   {path: "/movie/:idMovie", element: <SingleMovie />},
];

export default routes;
