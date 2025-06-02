import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/frontend/NavBar/NavBar';
import Home from './components/frontend/Home/Home';
import About from './components/frontend/About/About';
import Category from './components/frontend/category/category';
import Toys from './components/frontend/Toys/Toys';
import ToyDetails from './components/frontend/Toys/ToyDetail';
import Login from './components/frontend/Login/Login';
import Signup from './components/frontend/Login/signup/signup';
import Forgotpass from './components/frontend/forgotpass/forgotpass';
import FavouritesPage from './components/frontend/NavBar/favourites';
import Cart from './components/frontend/NavBar/cart';





function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/toys/:toyId" element={<ToyDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/cart" element={<Cart/>}/>


      </Routes>
    </Router>
  );
}

export default App;
