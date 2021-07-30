import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
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
  const offerProducts = [
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
  ];
  return (
    <div>
      <Header />
      <img src="/assets/images/11.jpg" alt="" className="banner" />
      {/* top-brands */}
      <div className="top-brands">
        <div className="container">
          <h2>Top selling offers</h2>
          <div className="grid_3 grid_5">
            <div
              className="bs-example bs-example-tabs"
              role="tabpanel"
              data-example-id="togglable-tabs"
            >
              <div id="myTabContent" className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="expeditions"
                  aria-labelledby="expeditions-tab"
                >
                  <Link to="/products">See All Products &nbsp; &gt; </Link>
                  <div className="agile_top_brands_grids">
                    {products.map((product) => {
                      return (
                        <div className="col-md-4 top_brand_left" key={product.id}>
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
                                      <Link to={`/products/${product.id}`}>
                                        <img title=" " alt=" " src={product.image} />
                                      </Link>
                                      <p>{product.title}</p>
                                      <h4>
                                        ${product.price} <span>$35.00</span>
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
                  <br />
                  <Link to="/products">See All Products &nbsp; &gt; </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //top-brands */}
      {/* banner-bottom */}
      <div className="ban-bottom-l">
        <div className="container">
          <div className="col-md-6 ban-bottom3">
            <div className="ban-top">
              <img src="/assets/images/p2.jpg" className="img-responsive" alt="" />
            </div>
            <div className="ban-img">
              <div className=" ban-bottom1">
                <div className="ban-top">
                  <img src="/assets/images/p3.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="ban-bottom2">
                <div className="ban-top">
                  <img src="/assets/images/p4.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img src="/assets/images/111.jpg" className="img-responsive" alt="" />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
      {/* banner-bottom */}
      {/* brands */}
      <div className="brands">
        <div className="container">
          <h3>Brand Store</h3>
          <div className="brands-agile">
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>

            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-1">
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>

            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-2">
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>

            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="col-md-2 layouts-brand">
              <div className="brands-l">
                <p>
                  <Link to="#">Lorem</Link>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      {/* //brands */}
      {/* new  */}
      <div className="newproducts-agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            {offerProducts.map((product) => {
              return (
                <div className="col-md-3 top_brand_left-1" key={product.id}>
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="/assets/images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <Link to={`/products${product.id}`}>
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
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
