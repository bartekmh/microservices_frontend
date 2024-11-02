import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import TourAdd from "./pages/TourAdd";
import TourHome from "./pages/TourHome";
import TourList from "./pages/TourList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotfound from "./pages/PageNotFound";
import TourDetails from "./pages/TourDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TourHome />,
    errorElement: <PageNotfound />,
  },
  {
    path: "/tourList",
    element: <TourList />,
    children: [
      {
        // render tour details inside Tour list page in <Outlet/> tag
        path: "/tourList/:tourId",
        element: <TourDetails />,
      },
    ],
  },
  {
    path: "/tourAdd",
    element: <TourAdd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
