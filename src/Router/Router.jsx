import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Feedback from "../Pages/Feedback/Feedback";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h3>Error Occurred</h3>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/feedback',
        element:<Feedback/>
      }
    ]
  },
]);

export default router;