import './App.css';
import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Marketplace } from './pages/MarketPlace';
import { MarketData } from './dataset/marketData';
import Product from './pages/Product';

async function getProducts() {
  return MarketData
}
async function getProduct(num) {
  return MarketData[num]
}

const router = createBrowserRouter([
      {
        path: "/",
        element: <Header />,
        
        children: [
          {
            index: true,
            element: <Home />,
            loader: ()=>redirect('/Home'),
          },
          {
            path: "Home",
            element: <Home />,
          },
          {
            path: "Marketplace",
            element: <Marketplace />,
            loader: getProducts
          },
          {
            path: "Marketplace/:productId",
            element: <Product />,
            loader: ({params})=> getProduct(params.productId)
          }

        ]
      }
    ])

export default router;
