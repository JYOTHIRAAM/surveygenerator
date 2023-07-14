import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Survey from './Survey';
import AboutUs from './AboutUs';
import Contact from './Contact';
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
           <Route path="/Home/AboutUs" element={<AboutUs/>}></Route>
           <Route path="/Home/Survey" element={<Survey/>}></Route>
           <Route path="/Home/Contact" element={<Contact/>}></Route>
        </Routes>  
     </div>
  </Router>
  );
}

export default App;