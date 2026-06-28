import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import LikedProducts from './pages/LikedProducts';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/liked-products" element={<LikedProducts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
