import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/frontend/NavBar/NavBar'
import Home from './components/frontend/Home/Home'
import About from './components/frontend/About/About'
import Category from './components/frontend/category/category'
 import Toys from './components/frontend/Toys/Toys'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toys" element={<Toys />} /> 
        <Route path="/category" element={<Category />} />

      </Routes>
    </Router>
  )
}

export default App;
