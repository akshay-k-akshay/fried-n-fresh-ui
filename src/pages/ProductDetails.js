import React, { useEffect, useState } from "react";
import { productsApi } from "../Apis";

import Footer from "../components/Footer";
import Header from "../components/Header";

function ProductDetails(props) {
  const id = props.match.params.id;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    productsApi.find(id).then((response) => {
      setProduct(response);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="products">
        <div className="container">
          <div className="agileinfo_single">
            <div className="col-md-4 agileinfo_single_left">
              <img id="example" src={product.image} alt=" " className="img-responsive" />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <h2>{product.title}</h2>
              <div className="agile_description">
                <h4>Description :</h4>
                <p>{product.description} </p>
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4 className="m-sing">${product.price}</h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <button>add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
