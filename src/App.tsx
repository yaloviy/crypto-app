import React from 'react';

import './App.css';

import Home from './components/screens/Home/Home';
import About from './components/screens/About/About';
import PrivateRoute from './utils/router/PrivateRoute';
import { Routes, Route } from 'react-router-dom'
import Login from './components/screens/auth/Login/Login';
import Register from './components/screens/auth/Register/Register';
import Auth from './components/screens/auth/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
