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
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
