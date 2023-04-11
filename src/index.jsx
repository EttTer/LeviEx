import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';
import { Home } from './components/Home';
import { Reservation } from './components/Reservation';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

export const API_BASE_URL = 'http://leviexpress-backend.herokuapp.com/api';

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
      element: <App />, 
      errorElement: <ErrorPage />,
    },
    { path: '/reservation/:reservationId',
      element: <Reservation />}
  ]);
  
  createRoot(document.querySelector("#app")).render(
    <RouterProvider router={router} />
  );
  


