/* eslint-disable */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const LikedProducts = () => {
  const [products, setProducts] = useState([]);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const token = localStorage.getItem('token');

  const fetchLiked = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      const likedOnly = res.data.filter(p => p.likes && p.likes.includes(user?._id));
      setProducts(likedOnly);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLiked();
  }, []);

  const handleLikeToggle = async (id) => {
    await axios.put(`http://localhost:5000/api/products/like/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchLiked();
  };

  return (
    <div>
      <div className="section-head">
        <div>
          <h1 className="page-title">Liked Products</h1>
          <p className="muted">Everything you have saved in one clean view.</p>
        </div>
        <span className="pill">{products.length} saved</span>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h3>No liked products found</h3>
          <p className="muted">Tap Like on products from the home page to build your saved collection.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <ProductCard key={p._id} product={p} onLikeToggle={handleLikeToggle} onEdit={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedProducts;
