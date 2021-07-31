import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsApi } from "../Apis";

import Footer from "../components/Footer";
import Header from "../components/Header";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsApi.list().then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <div>
      <Header />
      {/* <!--- products ---> */}
      <div className="products">
        <div className="container">
          <div className="products-right">
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
                                <h4> ${product.price} </h4>
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
        </div>
      </div>
      {/* <!--- products ---> */}
      <Footer />
    </div>
  );
}

export default ProductsPage;
