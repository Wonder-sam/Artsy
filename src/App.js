import './App.css';
import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

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
          }
        ]
      }
    ])

export default router;
