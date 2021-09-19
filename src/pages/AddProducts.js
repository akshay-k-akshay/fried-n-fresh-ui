import React, { useState } from "react";

import { productsApi } from "../Apis";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AddProducts() {
  const [previewImage, setPreviewImage] = useState("/assets/images/no-image.png");
  const [image, setImage] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function AddProducts(e) {
    e.preventDefault();
    const res = await productsApi.add({ title, price, description }, image).catch((err) => {
      console.log(err);
    });
    console.log(res);
  }
  return (
    <div>
      <Header />
      <div className="products">
        <div className="container">
          <div className="agileinfo_single">
            <div className="col-md-4 agileinfo_single_left">
              <label htmlFor="image">
                <img id="example" src={previewImage} alt=" " className="img-responsive" />
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => {
                  const file = e.target.files[0];
                  var reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = function () {
                    setPreviewImage(reader.result);
                  };
                  setImage(file);
                }}
                style={{ display: "none" }}
              />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <h3>Title:</h3>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={{ width: "64%" }}
              />
              <div className="agile_description">
                <h3>Description :</h3>
                <p>
                  <textarea
                    name=""
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    id=""
                    style={{ width: "80%" }}
                  ></textarea>
                </p>
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h3>Price: </h3>
                  <input
                    type="text"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    style={{ width: "64%" }}
                  />
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <button onClick={AddProducts}>Add Product</button>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddProducts;
