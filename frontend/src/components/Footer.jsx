import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer-brand">
            <span className="footer-brand__mark">B</span>
            <span>Blackcube Solution LLC</span>
          </Link>
          <p>
            A clean product marketplace experience for discovering, listing, and saving quality products.
          </p>
        </div>

        <div className="footer__grid">
          <div>
            <h3>Store</h3>
            <Link to="/">Products</Link>
            <Link to="/liked-products">Liked Products</Link>
            <Link to="/add-product">Add Product</Link>
          </div>

          <div>
            <h3>Account</h3>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/profile">Profile</Link>
          </div>

          <div>
            <h3>Company</h3>
            <span>Blackcube Solution LLC</span>
            <span>Modern commerce UI</span>
            <span>Secure product listings</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Blackcube Solution LLC. All rights reserved.</span>
        <span>Built for a responsive MERN product store.</span>
      </div>
    </footer>
  );
};

export default Footer;
