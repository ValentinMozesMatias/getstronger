import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './src/Home.js'
import { Mentors } from './src/Mentors'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode basename="/app">
    <BrowserRouter>
      <Routes>
        {/* <Route path="/"  element={<App />}></Route> */}
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Mentors" element={<Mentors />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
