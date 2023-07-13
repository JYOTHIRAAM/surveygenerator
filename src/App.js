import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        </Routes>  
    </div>
   </Router>
  );
}

export default App;