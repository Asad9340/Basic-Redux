import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h3>Error Occurred</h3>,
    children: [
      {
        path: '/',
        element:<Home/>
      }
    ]
  },
]);

export default router;