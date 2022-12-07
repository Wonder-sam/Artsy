import './App.css';
import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Marketplace } from './pages/MarketPlace';

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
            element: <Home />
          },
          {
            path: "Marketplace",
            element: <Marketplace />
          }
        ]
      }
    ])

export default router;
