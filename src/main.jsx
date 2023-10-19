import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './Layout/Root.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import BrandProducts from './components/Brand-products/BrandProducts.jsx';
import Details from './components/Details/Details.jsx';
import UpdateProduct from './components/UpdateProduct/UpdateProduct.jsx';
import MyCart from './components/MyCart/MyCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/brand-products/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch('http://localhost:5000/brand-products')
      },
      {
        path: "/brand-products/:brand/product-details/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/brand-products/${params.id}`)
      },
      {
        path: "/brand-products/:brand/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/brand-products/${params.id}`)
      },
      {
        path: "/mycarts",
        element: <MyCart></MyCart>,
        loader: () => fetch(`http://localhost:5000/carts`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
