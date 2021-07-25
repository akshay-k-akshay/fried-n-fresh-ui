import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* navigation  */}
      <div className="navigation-agileits">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header nav_2">
              <button
                type="button"
                className="navbar-toggle collapsed navbar-toggle1"
                data-toggle="collapse"
                data-target="#bs-megadropdown-tabs"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="" className="act">
                    Home
                  </Link>
                </li>
                <li>
                  <NavLink to="contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* //navigation  */}
    </div>
  );
}

export default Navbar;
