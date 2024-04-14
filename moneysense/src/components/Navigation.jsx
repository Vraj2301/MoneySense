import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MoneySense</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/budgeting">Budgeting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/debt_management">Debt Management</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/investing">Investing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_literacy">Financial Literacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
