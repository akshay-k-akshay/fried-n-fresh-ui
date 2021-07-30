import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function ProductsPage() {
  const products = [
    {
      id: "1",
      title: "Tata Salt",
      price: "290.00",
      image: "/assets/images/1.png",
    },
    {
      id: "2",
      title: "Fortune oil",
      price: "250.00",
      image: "/assets/images/2.png",
    },
    {
      id: "3",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/3.png",
    },
    {
      id: "4",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/4.png",
    },
    {
      id: "5",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/5.png",
    },
    {
      id: "6",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/6.png",
    },
    {
      id: "7",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/7.png",
    },
    {
      id: "8",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/8.png",
    },
    {
      id: "9",
      title: "Aashirvaad atta",
      price: "15.00",
      image: "/assets/images/9.png",
    },
  ];
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
              {products.map((product) => {
                return (
                  <div className="col-md-4 top_brand_left" key={product.id}>
                    <div className="hover14 column">
                      <div className="agile_top_brand_left_grid">
                        <div className="agile_top_brand_left_grid_pos">
                          <img src="/assets/images/offer.png" alt=" " className="img-responsive" />
                        </div>
                        <div className="agile_top_brand_left_grid1">
                          <figure>
                            <div className="snipcart-item block">
                              <div className="snipcart-thumb">
                                <Link to="/products/123">
                                  <img title=" " alt=" " src={product.image} />
                                </Link>
                                <p>{product.title}</p>
                                <h4>
                                  ${product.price} <span>$55.00</span>
                                </h4>
                              </div>
                              <div className="snipcart-details top_brand_home_details">
                                <button>add to cart</button>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
