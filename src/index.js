// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";
import App from './App';
import  Home  from "./Components/Home";
import Test1  from "./Components/Test1";
import  Test2  from "./Components/Test2";
import  Contact  from "./Components/Contact";

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="test1" element={<Test1 />} />
      <Route exact path="test2" element={<Test2 />} />
      <Route exact path="contact" element={<Contact />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<App />} />
      <Route path="*" element={<main>404</main>} />
    </Routes>
  </BrowserRouter>,
  document.querySelector( "#root" )
);
