import React, {useState} from "react";
import {useRoutes} from "react-router-dom";
import routes from "../Routes/routes";
import ContextAll from "../Context/AllContext";
import {Toaster} from "react-hot-toast";
export default function App() {
   const router = useRoutes(routes);
   const [isLogin, setIsLogin] = useState(false);

   const loginUser = () => {};
   const logoutUser = () => {};

   return (
      <ContextAll.Provider value={{isLogin, loginUser, logoutUser}}>
         <Toaster
            toastOptions={{
               duration: 2000,
               style: {
                  flexDirection: "row-reverse",
                  fontSize: "15px",
               },
            }}
            position='top-right'
         />
         <div>{router}</div>
      </ContextAll.Provider>
   );
}
