import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import EmptyCart from "./features/cart/EmptyCart";
import OrderItem from "./features/order/OrderItem";
import CreateOrder from "./features/order/CreateOrder";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Menu />,
          path: "/menu",
        },
        {
          element: <EmptyCart/>,
          path: "/cart",
        },
        {
          element: <CreateOrder/>,
          path: "/order/new",
        },
        {
          element: <OrderItem />,
          path: "/order/:orderId",
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
