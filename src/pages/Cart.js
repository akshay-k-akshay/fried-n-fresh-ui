import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Cart() {
  const products = [
    {
      id: "1",
      title: "Tata Salt",
      price: "290.00",
      quantity: 1,
      image: "/assets/images/1.png",
    },
    {
      id: "2",
      title: "Fortune oil",
      price: "250.00",
      quantity: 1,
      image: "/assets/images/2.png",
    },
    {
      id: "3",
      title: "Aashirvaad atta",
      price: "15.00",
      quantity: 1,
      image: "/assets/images/3.png",
    },
  ];
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="container">
          <h2>
            Your shopping cart contains: <span>3 Products</span>
          </h2>
          <div className="checkout-right">
            <table className="timetable_sub">
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Product</th>
                  <th>Quality</th>
                  <th>Product Name</th>

                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  {
                    console.log(product);
                  }
                  return (
                    <tr className="rem1" key={product.id}>
                      <td className="invert">{index + 1}</td>
                      <td className="invert-image">
                        <Link to={`/products/${product.id}`}>
                          <img src={product.image} alt=" " className="img-responsive" />
                        </Link>
                      </td>
                      <td className="invert">
                        <div className="quantity">
                          <div className="quantity-select">
                            <div className="entry value-minus">&nbsp;</div>
                            <div className="entry value">
                              <span>{product.quantity}</span>
                            </div>
                            <div className="entry value-plus active">&nbsp;</div>
                          </div>
                        </div>
                      </td>
                      <td className="invert">{product.title}</td>

                      <td className="invert">${product.price}</td>
                      <td className="invert">
                        <div className="rem">
                          <div className="close1"> </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="checkout-left">
            <div className="checkout-left-basket">
              <h4>Checkout</h4>
              <ul>
                <li>
                  Product1 <i>-</i> <span>$15.00 </span>
                </li>
                <li>
                  Product2 <i>-</i> <span>$25.00 </span>
                </li>
                <li>
                  Product3 <i>-</i> <span>$29.00 </span>
                </li>
                <li>
                  Total Service Charges <i>-</i> <span>$15.00</span>
                </li>
                <li>
                  Total <i>-</i> <span>$84.00</span>
                </li>
              </ul>
            </div>
            <div className="checkout-right-basket">
              <Link to="/products">
                <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                Continue Shopping
              </Link>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
