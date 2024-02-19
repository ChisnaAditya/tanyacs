import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./formtanyacs";
import Terimakasih from "./konfirmasi";

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/terimakasih",
      element: <Terimakasih />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
