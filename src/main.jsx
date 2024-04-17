import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Roote from './component/roote/Roote.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import RegisterPage from './component/Register/RegisterPage.jsx';
import Login from './component/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import EastateDtails from './component/EastateDetails/EastateDetails.jsx';
import PrivateRout from './component/roote/PrivateRout.jsx';
import UserProfile from './component/UserProfile/UserProfile.jsx';

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
      {
        path: "/eastate/:id",
        element: <PrivateRout><EastateDtails></EastateDtails></PrivateRout>,
        loader: () => fetch('../public/residence.json')
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);

