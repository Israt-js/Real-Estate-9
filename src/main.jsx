import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import UpdateProfile from './component/UpdateProfile/UpdateProfile.jsx';
import SpecialHome from './component/SpecialHome/SpecialHome.jsx';
import PropertyCard from './Property/PropertyCard.jsx';

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
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/",
        element: <SpecialHome></SpecialHome>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: '/pro',
        element: <PropertyCard></PropertyCard>
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

