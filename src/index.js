import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/ClashDisplay/ClashDisplay-Semibold.ttf'
import './assets/fonts/ClashDisplay/ClashDisplay-Light.ttf'
import './assets/fonts/ClashDisplay/ClashDisplay-Regular.ttf'
import './assets/fonts/Satoshi/Satoshi-Variable.ttf'
import './assets/fonts/Satoshi/Satoshi-Regular.ttf'
import './assets/fonts/StixFonts/STIXTwoText-Bold.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
