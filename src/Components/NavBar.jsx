import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bar">
      <Link className="navbar-brand nav-heading" to="/">Nutrometer</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end nav-links" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/' className="nav-link" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
 