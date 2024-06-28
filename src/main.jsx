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
        element:<AddCar/>
      },
      {
        path:'/myCart',
        element:<MyCart/>,
        loader:()=>fetch("http://localhost:5000/carts")
      },
      {
        path:'/editCart/:id',
        element:<EditCart/>,
        loader:({params})=>fetch(`http://localhost:5000/carts/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
