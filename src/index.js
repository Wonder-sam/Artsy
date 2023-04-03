import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import './assets/fonts/ClashDisplay/ClashDisplay-Semibold.ttf'
import './assets/fonts/ClashDisplay/ClashDisplay-Bold.ttf'
import './assets/fonts/ClashDisplay/ClashDisplay-Light.ttf'
import './assets/fonts/ClashDisplay/ClashDisplay-Regular.ttf'
import './assets/fonts/Satoshi/Satoshi-Variable.ttf'
import './assets/fonts/Satoshi/Satoshi-Regular.ttf'
import './assets/fonts/Satoshi/Satoshi-Bold.ttf'
import './assets/fonts/StixFonts/STIXTwoText-Bold.ttf'
import './assets/fonts/StixFonts/STIXTwoText-Medium.ttf'
import router from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
