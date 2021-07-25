import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

function ProductsPage() {
  return (
    <div>
      <Header />
      {/* <!--- products ---> */}
      <div className="products">
        <div className="container">
          <div className="products-right">
            <div className="products-right-grid">
              <div className="products-right-grids">
                <div className="sorting">
                  <select id="country" className="frm-field required sect">
                    <option value="444">Default sorting</option>
                    <option value="444">Sort by popularity</option>
                    <option value="444">Sort by average rating</option>
                    <option value="444">Sort by price</option>
                  </select>
                </div>
                <div className="sorting-left">
                  <select id="country1" className="frm-field required sect">
                    <option value="4444">Item on page 9</option>
                    <option value="4444">Item on page 18</option>
                    <option value="4444">Item on page 32</option>
                    <option value="4444">All</option>
                  </select>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="agile_top_brands_grids">
              <div className="col-md-4 top_brand_left">
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
                            <Link to="/products/123">
                              <img
                                title=" "
                                alt=" "
                                src="/assets/images/pf4.png"
                              />
                            </Link>
                            <p>Sampann-toor-dal</p>
                            <h4>
                              $35.99 <span>$55.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Fortune Sunflower Oil"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="35.99"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
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
                            <Link to="/products/id">
                              <img
                                title=" "
                                alt=" "
                                src="/assets/images/bv3.png"
                              />
                            </Link>
                            <p>Parryss-sugar</p>
                            <h4>
                              $30.99 <span>$45.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="basmati rise"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="30.99"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img
                        src="/assets/images/offer.png"
                        alt=" "
                        className="img-responsive"
                      />
                    </div>
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
                            <Link to="/products/id">
                              <img
                                src="/assets/images/16.png"
                                alt=" "
                                className="img-responsive"
                              />
                            </Link>
                            <p>Saffola-gold</p>
                            <h4>
                              $80.99 <span>$105.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Pepsi soft drink"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="80.00"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <div className="col-md-4 top_brand_left">
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
                            <Link to="/products/id">
                              <img
                                title=" "
                                alt=" "
                                src="/assets/images/hh4.png"
                              />
                            </Link>
                            <p>Sampann-toor-dal</p>
                            <h4>
                              $35.99 <span>$55.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Fortune Sunflower Oil"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="35.99"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
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
                            <Link to="/products/id">
                              <img
                                title=" "
                                alt=" "
                                src="/assets/images/gu5.png"
                              />
                            </Link>
                            <p>Parryss-sugar</p>
                            <h4>
                              $30.99 <span>$45.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="basmati rise"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="30.99"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img
                        src="/assets/images/offer.png"
                        alt=" "
                        className="img-responsive"
                      />
                    </div>
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
                            <Link to="/products/id">
                              <img
                                src="/assets/images/pc6.png"
                                alt=" "
                                className="img-responsive"
                              />
                            </Link>
                            <p>Saffola-gold</p>
                            <h4>
                              $80.99 <span>$105.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Pepsi soft drink"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="80.00"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <div className="col-md-4 top_brand_left">
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
                            <Link to="/products/id">
                              <img
                                title=" "
                                alt=" "
                                src="/assets/images/gu4.png"
                              />
                            </Link>
                            <p>Sampann-toor-dal</p>
                            <h4>
                              $35.99 <span>$55.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Fortune Sunflower Oil"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="35.99"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
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
                            <Link to="/products/id">
                              <img
                                title=" "
                                alt=" "
                                src="/assets/images/5.png"
                              />
                            </Link>
                            <p>Parryss-sugar</p>
                            <h4>
                              $30.99 <span>$45.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="basmati rise"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="30.99"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img
                        src="/assets/images/offer.png"
                        alt=" "
                        className="img-responsive"
                      />
                    </div>
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
                            <Link to="/products/id">
                              <img
                                src="/assets/images/6.png"
                                alt=" "
                                className="img-responsive"
                              />
                            </Link>
                            <p>Saffola-gold</p>
                            <h4>
                              $80.99 <span>$105.00</span>
                            </h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Pepsi soft drink"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="80.00"
                                />
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
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <nav className="numbering">
              <ul className="pagination paging">
                <li>
                  <Link to="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to="#">
                    1<span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
                <li>
                  <Link to="#">5</Link>
                </li>
                <li>
                  <Link to="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/* <!--- products ---> */}
      <Footer />
    </div>
  );
}

export default ProductsPage;
