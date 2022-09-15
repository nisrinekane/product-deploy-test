import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main'
import Detail from './components/Detail'
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element ={<Navigate to="/products" />} path="/" />
        <Route element={<Main />} path="/products" />
        <Route element={<Detail />} path="/products/:id" />
        <Route element={<Update/>} path="/products/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
