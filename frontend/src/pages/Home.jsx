/* eslint-disable */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLike = async (id) => {
    if (!token) return alert('Please login to like products');
    try {
      await axios.put(`http://localhost:5000/api/products/like/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section className="hero-panel">
        <div className="hero-panel__content">
          <span className="eyebrow">Curated marketplace</span>
          <h1>Discover polished products for Blackcube.</h1>
          <p>
            Browse the latest listings, save your favorites, and publish new products with a cleaner, faster store experience.
          </p>
          {token && (
            <button className="btn" onClick={() => navigate('/add-product')}>
              Add New Product
            </button>
          )}
        </div>

        <div className="hero-stats" aria-label="Store statistics">
          <div className="hero-stat">
            <strong>{products.length}</strong>
            <span>products listed</span>
          </div>
          <div className="hero-stat">
            <strong>{products.reduce((total, product) => total + (product.likes?.length || 0), 0)}</strong>
            <span>total likes</span>
          </div>
        </div>
      </section>

      <div className="section-head">
        <div>
          <h2>Featured Collection</h2>
          <p className="muted">Fresh products from the Blackcube community.</p>
        </div>
        {!token && <span className="pill">Login to like and edit</span>}
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h3>No products available yet</h3>
          <p className="muted">Be the first one to add a product to the Blackcube store.</p>
          {token && (
            <button className="btn" onClick={() => navigate('/add-product')}>
              Add New Product
            </button>
          )}
        </div>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onLikeToggle={handleLike}
              onEdit={(prod) => navigate('/add-product', { state: { editProduct: prod } })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
