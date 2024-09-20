import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StockMarketPage from './pages/StockMarketPage';
import PercentagePage from './pages/PercentagePage';
import EMIPage from './pages/EMIPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StockMarketPage toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/percentage" element={<PercentagePage />} />
          <Route path="/emi" element={<EMIPage />} />
        </Routes>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </Router>
    </div>
  );
}

export default App;
