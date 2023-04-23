import React from 'react';
import './App.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import {AdminPage} from './pages/AdminPage/AdminPage';
import { Workshops } from './pages/Workshops/Workshops';
import { AddWorkshops } from './pages/Workshops/AddWorkshops';
import { EditWorkshops } from './pages/Workshops/EditWorkshops';
import { DeleteWorkshops } from './pages/Workshops/DeleteWorkshops';
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
          <Route path="/Workshops" element={<Workshops />} />
          <Route path="/AddWorkshops" element={<AddWorkshops />} />
          <Route path="/EditWorkshops" element={<EditWorkshops />} />
          <Route path="/DeleteWorkshops" element={<DeleteWorkshops />} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}
