import { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Login from './pages/login';
import Home from './pages/home';
import AdminDashboard from './pages/adminPages/admindashboard';
import AdminCalc from './pages/adminPages/admincalc';

function App() {
  return (
    <BrowserRouter >  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminsidebar" element={<AdminDashboard />} />
        <Route path="/calculatorA" element={<AdminCalc />} />

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
