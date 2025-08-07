import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import video2 from '../assets/video2.mp4';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', { emailId, password });

      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('userid', response.data.userId);

        const usersResponse = await axios.get('http://localhost:8080/api/users', {
          headers: { Authorization: `Bearer ${response.data.access_token}` }
        });

        const matchedUser = usersResponse.data.find(user => user.emailId === emailId);
        if (matchedUser) {
          localStorage.setItem('user', JSON.stringify(matchedUser));
        }

        navigate('/');
      }
    } catch (err) {
      setError(err.response?.status === 401 ? 'Invalid email or password' : 'An error occurred.');
    }
  };

  return (
    <div style={styles.container}>
      <video autoPlay muted loop style={styles.video}>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.inputGroup}>
          <label htmlFor="emailId" style={styles.label}>Email</label>
          <input
            type="email"
            id="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ ...styles.input, paddingRight: '40px' }}
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              style={styles.eyeIcon}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: -1,
    filter: 'brightness(45%)',
  },
  form: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: '40px 50px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.6)',
    color: '#fff',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '28px',
    borderBottom: '2px solid #ffcc00',
    paddingBottom: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  passwordWrapper: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#ccc',
    userSelect: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Login;
