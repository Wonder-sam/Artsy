import './App.css';
import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Marketplace } from './pages/MarketPlace';
import { MarketData } from './dataset/marketData';
import Product from './pages/Product';
import Auction from './pages/Auction';
import LiveBid from './pages/LiveBid';
import { auctionData } from './dataset/auctionData';

async function getProducts() {
  return MarketData
}
async function getProduct(num) {
  return MarketData[num]
}

async function getAuction(num) {
  return auctionData[num]
}

const router = createBrowserRouter([
      {
        path: "/",
        element: <Header />,
        loader: getProducts,
        
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
          },
          {
            path: "Auctions",
            element: <Auction />
          },
          {
            path: "Auctions/:auctionId",
            element: <LiveBid />,
            loader: ({params})=> getAuction(params.auctionId)
          },

        ]
      }
    ])

export default router;
