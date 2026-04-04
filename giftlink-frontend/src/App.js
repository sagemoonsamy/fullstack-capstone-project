import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage'; // Import SearchPage
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
          <Route path="/app/product/:productId" element={<DetailsPage/>} />

          {/* Search Page */}
          {/* Task 1: Add the route for search */}
          <Route path="/app/search" element={<SearchPage/>} />
        </Routes>
    </>
  );
}

export default App;