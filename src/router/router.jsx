import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
   {
    path:"/",
    element: <Root/>,
    errorElement: <Error/>,
    children : [
      {
         index:true,
         element: <Home/>
      }
    ]
   }
])