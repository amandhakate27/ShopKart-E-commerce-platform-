import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import PublicRoute from "../routes/PublicRoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Groceries from "../pages/Groceries";
import Shop from "../pages/Shop";
const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />
            },
            {
              path: "register",
              element: <RegisterPage />
            }
          ]
        }
      ]
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />
            },
            {
              path: "about",
              element: <About />
            },
            {
              path: "cart",
              element: <Cart />
            },
            {
              path: "groceries",
              element: <Groceries />
            },
            {
              path: "shop",
              element: <Shop />
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default AppRoute