import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      alert('Signup success! Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-wrap">
      <section className="form-card">
        <div className="form-card__head">
          <span className="pill">Create account</span>
          <h2>Sign Up</h2>
          <p className="muted">Join Blackcube Store to publish products and build your liked collection.</p>
        </div>

        <form onSubmit={handleSignup} className="form-grid">
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="btn">Register</button>
        </form>

        <p className="form-foot">Already have an account? <Link to="/login">Login</Link></p>
      </section>
    </div>
  );
};

export default Signup;
