import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './Register'
import UserDetails from './UserDetails';


function App() {

  return (
    <Router>
      <Routes>    
        <Route path="/" element={<Register/>}/>
        <Route path="/user-details" element={<UserDetails />} />

      </Routes>
    </Router>
  )
}

export default App
