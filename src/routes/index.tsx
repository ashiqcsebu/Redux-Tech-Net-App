import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";

export const routes = createBrowserRouter([
    {
      path:"/",
     element:<App></App>
    },
    {
      path:"/",
     element:<Home></Home>
    },
    {
      path:"*",
     element:<NotFound></NotFound>
    }

])