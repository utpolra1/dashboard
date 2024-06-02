import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router.jsx';
import Dashbord from './Dashbord/Dashbord.jsx';
import Cart from './Dashbord/Pages/Cart.jsx';
import MyBooking from './Dashbord/Pages/MyBooking.jsx';
import UserHome from './Dashbord/Pages/UserHome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
  },
  {
    path:'dashbord',
    element:<Dashbord></Dashbord>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'mybooking',
        element:<MyBooking></MyBooking>
      },
      {
        path:'userhome',
        element:<UserHome></UserHome>
      }
    ]
  }
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
