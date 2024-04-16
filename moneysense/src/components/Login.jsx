import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (!userData) {
      setLoginError('No user data found. Please sign up first.');
      return;
    }

    // Compare entered email and password with stored data
    if (userData.email !== email || userData.password !== password) {
      setLoginError('Invalid email or password. Please try again.');
      setLoginSuccess(false);
    } else {
      setLoginError('');
      setLoginSuccess(true);
      // Redirect user to dashboard or perform other actions upon successful login
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {loginError && <div className="alert alert-danger">{loginError}</div>}
              {loginSuccess && <div className="alert alert-success">Login successful!</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary me-2">Login</button>
                <Link to="/sign_up" className="btn btn-secondary">Sign Up</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
