import React from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Home } from "../Home";
import { Reservation } from "../Reservation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Škoda, asi čekáte něco, co tu není </h2>
      <p>Možná jste se spletli, zkuste to jinak</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reservation/:reservationId",
    element: <Reservation />,
  },
]);
