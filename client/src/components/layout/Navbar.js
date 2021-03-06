import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-olive border-bottom border-dark">
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AvailableProperties">
              Available Properties
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/OurServices">
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav d-none d-lg-inline navbar-text-center">
        <li className="nav-item">
          <Link className="title-link" to="/">
            <h4>Star Property Managment</h4>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/AgentLogin">
            Agent Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/OwnerLogin">
            Owner Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TenantLogin">
            Tenant Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
