/* eslint-disable */
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { apiUrl } from "../api";

const LikedProducts = () => {
  const [products, setProducts] = useState([]);

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const token = localStorage.getItem("token");

  const fetchLiked = async () => {
    try {
      const res = await axios.get(apiUrl("/api/products"));

      // Works for both backend response types:
      // 1. res.send(products)
      // 2. res.json({ success: true, products })
      const allProducts = Array.isArray(res.data)
        ? res.data
        : res.data.products || [];

      const likedOnly = allProducts.filter(
        (p) => p.likes && p.likes.some((id) => id.toString() === user?._id)
      );

      setProducts(likedOnly);
    } catch (err) {
      console.error("Fetch liked products error:", err);
    }
  };

  useEffect(() => {
    fetchLiked();
  }, []);

  const handleLikeToggle = async (id) => {
    try {
      await axios.put(
        apiUrl(`/api/products/like/${id}`),
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchLiked();
    } catch (err) {
      console.error("Like toggle error:", err);
      alert(err.response?.data?.message || "Please login again");
    }
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
          <p className="muted">
            Tap Like on products from the home page to build your saved
            collection.
          </p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onLikeToggle={handleLikeToggle}
              onEdit={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedProducts;
