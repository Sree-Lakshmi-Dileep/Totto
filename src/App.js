import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/frontend/NavBar/NavBar'
import Home from './components/frontend/Home/Home'
import About from './components/frontend/About/About'



// import Toys from './components/frontend/Toys/Toys'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment and add these when ready */}
        <Route path="/about" element={<About />} />

        {/* <Route path="/toys" element={<Toys />} /> */}
      </Routes>
    </Router>
  )
}

export default App
