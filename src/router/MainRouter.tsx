import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import { Home } from "../pages";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "Home",
        Component: MainLayouts,
        children: [
          {
            index: true,
            Component: Home,
          },
        ],
      },
    ],
  },
]);

const MainRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default MainRouter;
