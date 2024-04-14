import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">Copyright © 2023 MoneySense</p>
          </div>
          <div className="col-md-6 text-md-right">
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item"> <Link to="/contact" className="text-muted">Contact Us</Link> </li>
                <li className="list-inline-item"> <Link to="/about" className="text-muted">About Us</Link> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
