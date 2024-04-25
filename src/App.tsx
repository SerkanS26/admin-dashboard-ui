// styles
import "./styles/global.scss";

// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//screens
import HomeScreen from "./screens/home/HomeScreen";

import UsersScreen from "./screens/users/UsersScreen";
import ProductsScreen from "./screens/products/ProductsScren";
import LoginScreen from "./screens/login/LoginScreen";

// Layout
import Layout from "./components/layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/users",
          element: <UsersScreen />,
        },
        {
          path: "/products",
          element: <ProductsScreen />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
