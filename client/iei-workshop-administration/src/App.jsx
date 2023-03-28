import React from 'react';
import './App.css';
import { LoginPage } from './Components/LoginPage/LoginPage';
import {AdminPage} from './Components/AdminPage/AdminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}
