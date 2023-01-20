import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Forms from './component/Forms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchFormData from './component/FetchFormData';
import Homepage from './component/Homepage';
import Register from './component/Register';
import Login from './component/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/form' element={<Forms />} />
      <Route path='/formdata' element={<FetchFormData />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
