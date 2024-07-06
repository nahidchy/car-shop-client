import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Root/LayOut';
import Home from './Components/Home/Home';
import AllCars from './Components/AllCars/AllCars';
import AddCar from './Components/AddCar/AddCar';
import MyCart from './Components/MyCart/MyCart';
import EditCart from './Components/EditCart/EditCart';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthContext from './Components/AuthContext/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/allCars',
        element:<AllCars/>
      },
      {
        path:'/addCar',
        element:<PrivateRoute><AddCar/></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart/>,</PrivateRoute>,
        loader:()=>fetch("https://car-shop-server.onrender.com/carts")
      },
      {
        path:'/editCart/:id',
        element:<EditCart/>,
        loader:({params})=>fetch(`https://car-shop-server.onrender.com/carts/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContext>
  <RouterProvider router={router}></RouterProvider>
  </AuthContext>
  </React.StrictMode>,
)
