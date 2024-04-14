import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Roote from './component/roote/Roote.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './component/hame/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roote />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

