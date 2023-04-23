import React from 'react';
import './App.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import {AdminPage} from './pages/AdminPage/AdminPage';
import Nav from './molecules/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="" element={<Nav />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}
