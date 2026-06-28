/* eslint-disable */
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(apiUrl("/api/products"));

      // Supports both backend response types:
      // 1. res.send(products)
      // 2. res.json({ success: true, products })
      const productList = Array.isArray(res.data)
        ? res.data
        : res.data.products || [];

      setProducts(productList);
    } catch (err) {
      console.error("Fetch products error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLike = async (id) => {
    if (!token) {
      alert("Please login to like products");
      navigate("/login");
      return;
    }

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

      fetchProducts();
    } catch (err) {
      console.error("Like error:", err);
      alert(err.response?.data?.message || "Like failed. Please login again.");
    }
  };

  return (
    <div>
      <section className="hero-panel">
        <div className="hero-panel__content">
          <span className="eyebrow">Curated marketplace</span>
          <h1>Discover polished products for Blackcube.</h1>
          <p>
            Browse the latest listings, save your favorites, and publish new
            products with a cleaner, faster store experience.
          </p>

          {token && (
            <button className="btn" onClick={() => navigate("/add-product")}>
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
            <strong>
              {products.reduce(
                (total, product) => total + (product.likes?.length || 0),
                0
              )}
            </strong>
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
          <p className="muted">
            Be the first one to add a product to the Blackcube store.
          </p>

          {token && (
            <button className="btn" onClick={() => navigate("/add-product")}>
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
              onEdit={(prod) =>
                navigate("/add-product", {
                  state: {
                    editProduct: prod,
                  },
                })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;