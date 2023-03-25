import React from 'react';
import './App.css';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}
