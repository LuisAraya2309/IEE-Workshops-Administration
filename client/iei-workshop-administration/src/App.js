import logo from './logo.svg';
import './App.css';
import  LoginPage from './Components/LoginPage/LoginPage'
import {BrowserRouter as Router, Routes, Route} from "react";
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
