import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import { ShoppingCart } from './pages/ShoppingCart';
import { ProductCatalog } from './pages/ProductCatalog';
import { ShoppingContext } from './storage/ShoppingContext';
import { init_cart_items, api_item_data } from './Scripts/itemsPlaceHolder';
import './index.css'

var initialState = {
  "type": null,
  "carrinho": init_cart_items,
  "items_data": api_item_data,
  "activeItem": null, 
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductCatalog />
  },

  {
    path: "/carrinho",
    element: <ShoppingCart />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoppingContext initialState={initialState}>
    <RouterProvider router={router} />
  </ShoppingContext>
);
