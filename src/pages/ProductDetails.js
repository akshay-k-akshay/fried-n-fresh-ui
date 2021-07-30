import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function ProductDetails(props) {
  console.log(props);
  const productDetails = {
    id: 1,
    title: "KHARAMORRA Khakra - Hariyali",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: "20.00",
  };
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
  ];
  return (
    <div>
      <Header />
      <div className="products">
        <div className="container">
          <div className="agileinfo_single">
            <div className="col-md-4 agileinfo_single_left">
              <img id="example" src="/assets/images/si1.jpg" alt=" " className="img-responsive" />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <h2>{productDetails.title}</h2>
              <div className="agile_description">
                <h4>Description :</h4>
                <p>{productDetails.description} </p>
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4 className="m-sing">
                    ${productDetails.price} <span>$25.00</span>
                  </h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <button>add to cart</button>
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
            {products.map((product) => {
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
                              <Link to="products.html">
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
        </div>
        {/* <!-- //new --> */}
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
