import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="brand">
          <span className="brand__mark">B</span>
          <span>Blackcube Store</span>
        </Link>
        <div className="nav-links">
          {token ? (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/add-product" className="nav-link">Add Product</Link>
              <Link to="/liked-products" className="nav-link">Liked Products</Link>
              <Link to="/profile" className="nav-link">Profile</Link>
              <button onClick={handleLogout} className="btn btn--danger">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="btn">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
