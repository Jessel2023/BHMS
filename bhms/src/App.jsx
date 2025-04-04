import { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Login from './pages/login';
import Home from './pages/home';
import AdminDashboard from './pages/adminPages/admindashboard';

function App() {
  return (
    <BrowserRouter >  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
