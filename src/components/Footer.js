import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      {/* footer  */}
      <div className="footer">
        <div className="container">
          <div className="_footer_grids">
            <div className="col-md-3 _footer_grid">
              <h3>Contact</h3>

              <ul className="address">
                <li>
                  <i
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  1234k Avenue, 4th block,
                  <span>New York City.</span>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div className="col-md-3 _footer_grid">
              <h3>Information</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Special Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 _footer_grid">
              <h3>Category</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Chicken</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Beaf</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Mutton</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Fish</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 _footer_grid">
              <h3>Profile</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/">Store</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/cart">My Cart</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/signup">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <p>&copy; 2020 Fried N Fresh</p>
          </div>
        </div>
      </div>
      <div className="footer-botm">
        <div className="container">
          <div className="layouts-foot">
            <ul>
              <li>
                <Link to="#" className="_agile_facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="agile_twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="_agile_dribble">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="_agile_vimeo">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/* //footer */}
    </div>
  );
}

export default Footer;
