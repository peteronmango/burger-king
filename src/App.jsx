import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Menu from "./Components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
