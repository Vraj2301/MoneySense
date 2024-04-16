import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [invalidField, setInvalidField] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    // Perform basic validation
    if (!name || !email || !password || !confirmPassword) {
      setSignupError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setSignupError('Passwords do not match.');
      setInvalidField('confirmPassword');
      return;
    }

    // Save user data to localStorage
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    // Set signup success and clear error
    setSignupSuccess(true);
    setSignupError('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              {signupError && <div className="alert alert-danger">{signupError}</div>}
              {signupSuccess && <div className="alert alert-success">Signup successful. You can now log in.</div>}
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input type="text" className={`form-control ${invalidField === 'name' ? 'is-invalid' : ''}`} value={name} onChange={(e) => setName(e.target.value)} />
                  {invalidField === 'name' && <div className="invalid-feedback">Invalid name.</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className={`form-control ${invalidField === 'email' ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                  {invalidField === 'email' && <div className="invalid-feedback">Invalid email.</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" className={`form-control ${invalidField === 'password' ? 'is-invalid' : ''}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                  {invalidField === 'password' && <div className="invalid-feedback">Invalid password.</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password:</label>
                  <input type="password" className={`form-control ${invalidField === 'confirmPassword' ? 'is-invalid' : ''}`} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  {invalidField === 'confirmPassword' && <div className="invalid-feedback">Passwords do not match.</div>}
                </div>
                <button type="submit" className="btn btn-primary me-2">Sign Up</button>
                <Link to="/login" className="btn btn-secondary">Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;