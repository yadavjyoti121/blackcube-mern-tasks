/* eslint-disable */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const editProduct = location.state?.editProduct;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (editProduct) {
      setTitle(editProduct.title || '');
      setPrice(editProduct.price || '');
      setDescription(editProduct.description || '');
      setImage(editProduct.image || '');
    }
  }, [editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, price, description, image };
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      if (editProduct) {
        await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, data, config);
      } else {
        await axios.post('http://localhost:5000/api/products', data, config);
      }
      navigate('/');
    } catch (err) {
      alert('Operation failed!');
    }
  };

  return (
    <div className="form-wrap">
      <section className="form-card">
        <div className="form-card__head">
          <span className="pill">{editProduct ? 'Update listing' : 'New listing'}</span>
          <h2>{editProduct ? 'Edit Product' : 'Add New Product'}</h2>
          <p className="muted">Add clear details and a direct image URL so buyers can understand your product quickly.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="field">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div className="field">
            <label htmlFor="price">Price</label>
            <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>

          <div className="field">
            <label htmlFor="image">Image Direct URL</label>
            <input id="image" type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required rows="5" />
          </div>

          <button type="submit" className="btn">
            {editProduct ? 'Update Product' : 'Create Product'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
