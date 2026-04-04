import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DetailsPage from './components/DetailsPage/DetailsPage'; // Task 8: Import DetailsPage
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const navigate = useNavigate();

  return (
    <>
        <Navbar/>
        <Routes>
          {/* Main Landing Pages */}
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />

          {/* Authentication Pages */}
          <Route path="/app/login" element={<LoginPage />} />
          <Route path="/app/register" element={<RegisterPage />} />

          {/* Product Details Page */}
          {/* Task 8: Add the route with the :productId parameter */}
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
        </Routes>
    </>
  );
}

export default App;