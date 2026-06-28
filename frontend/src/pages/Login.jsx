import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-wrap">
      <section className="form-card">
        <div className="form-card__head">
          <span className="pill">Welcome back</span>
          <h2>Login</h2>
          <p className="muted">Sign in to like products, manage listings, and view your profile.</p>
        </div>

        <form onSubmit={handleLogin} className="form-grid">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="btn">Login</button>
        </form>

        <p className="form-foot">New here? <Link to="/signup">Create account</Link></p>
      </section>
    </div>
  );
};

export default Login;
