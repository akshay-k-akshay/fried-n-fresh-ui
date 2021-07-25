import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ProductDetails(props) {
  console.log(props);
  return (
    <div>
      <Navbar />
      <div className="products">
        <div className="container">
          <div className="agileinfo_single">
            <div className="col-md-4 agileinfo_single_left">
              <img
                id="example"
                src="/assets/images/si1.jpg"
                alt=" "
                className="img-responsive"
              />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <h2>KHARAMORRA Khakra - Hariyali</h2>
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />
                  {/* <label for="rating5">5</label> */}
                  <input id="rating4" type="radio" name="rating" value="4" />
                  {/* <label for="rating4">4</label> */}
                  <input id="rating3" type="radio" name="rating" value="3" />
                  {/* <label for="rating3">3</label> */}
                  <input id="rating2" type="radio" name="rating" value="2" />
                  {/* <label for="rating2">2</label> */}
                  <input id="rating1" type="radio" name="rating" value="1" />
                  {/* <label for="rating1">1</label> */}
                </span>
              </div>
              <div className="agile_description">
                <h4>Description :</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4 className="m-sing">
                    $21.00 <span>$25.00</span>
                  </h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  {/* <form action="#" method="post"> */}
                  <fieldset>
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="add" value="1" />
                    <input type="hidden" name="business" value=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      value="pulao basmati rice"
                    />
                    <input type="hidden" name="amount" value="21.00" />
                    <input type="hidden" name="discount_amount" value="1.00" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="return" value=" " />
                    <input type="hidden" name="cancel_return" value=" " />
                    <input
                      type="submit"
                      name="submit"
                      value="Add to cart"
                      className="button"
                    />
                  </fieldset>
                  {/* </form> */}
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- new --> */}
      <div className="newproducts-agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="/assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="products.html">
                            <img
                              title=" "
                              alt=" "
                              src="/assets/images/14.png"
                            />
                          </Link>
                          <p>Fried-gram</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $35.99 <span>$55.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          {/* <form action="#" method="post"> */}
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            {/* <input type="hidden" name="item_name" value="Fortune Sunflower Oil" /> */}
                            <input type="hidden" name="amount" value="35.99" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="USD"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                          {/* </form> */}
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="/assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="products.html">
                            <img
                              title=" "
                              alt=" "
                              src="/assets/images/15.png"
                            />
                          </Link>
                          <p>Navaratan-dal</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $30.99 <span>$45.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          {/* <form action="#" method="post"> */}
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="basmati rise"
                            />
                            <input type="hidden" name="amount" value="30.99" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="USD"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                          {/* </form> */}
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="/assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="products.html">
                            <img
                              title=" "
                              alt=" "
                              src="/assets/images/15.png"
                            />
                          </Link>
                          <p>Navaratan-dal</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $30.99 <span>$45.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          {/* <form action="#" method="post"> */}
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="basmati rise"
                            />
                            <input type="hidden" name="amount" value="30.99" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="USD"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                          {/* </form> */}
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="/assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="products.html">
                            <img
                              title=" "
                              alt=" "
                              src="/assets/images/15.png"
                            />
                          </Link>
                          <p>Navaratan-dal</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $30.99 <span>$45.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          {/* <form action="#" method="post"> */}
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="basmati rise"
                            />
                            <input type="hidden" name="amount" value="30.99" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="USD"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                          {/* </form> */}
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //new --> */}
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
