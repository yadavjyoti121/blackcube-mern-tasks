/* eslint-disable */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { apiUrl } from "../api";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const editProduct = location.state?.editProduct;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (editProduct) {
      setTitle(editProduct.title || "");
      setPrice(editProduct.price || "");
      setDescription(editProduct.description || "");
      setImage(editProduct.image || "");
    }
  }, [editProduct, token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const data = {
      title,
      price: Number(price),
      description,
      image,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (editProduct) {
        await axios.put(apiUrl(`/api/products/${editProduct._id}`), data, config);
        alert("Product updated successfully!");
      } else {
        await axios.post(apiUrl("/api/products"), data, config);
        alert("Product created successfully!");
      }

      navigate("/");
    } catch (err) {
      console.error("Product operation error:", err);
      alert(err.response?.data?.message || "Operation failed!");
    }
  };

  return (
    <div className="form-wrap">
      <section className="form-card">
        <div className="form-card__head">
          <span className="pill">
            {editProduct ? "Update listing" : "New listing"}
          </span>

          <h2>{editProduct ? "Edit Product" : "Add New Product"}</h2>

          <p className="muted">
            Add clear details and a direct image URL so buyers can understand
            your product quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="field">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="image">Image Direct URL</label>
            <input
              id="image"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="btn">
            {editProduct ? "Update Product" : "Create Product"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;