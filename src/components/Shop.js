import "../styles/Shop.css";
import React from "react";
import Product from "../images/product.webp";
import Product2 from "../images/product2.webp";
import Product3 from "../images/product3.webp";
import Product4 from "../images/product4.webp";
class Shop extends React.Component {
  state = {
    img: Product,
    img2: Product2,
    img3: Product3,
    img4: Product4,
  };
  render() {
    return (
      <>
        <div className="shop_head">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h4>
                  Shop Single <br /> Origins & Blends
                </h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop_bottom">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <span>Best Seller</span>
              <img src={this.state.img} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <img src={this.state.img} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <img src={this.state.img} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <span>On Sale</span>
              <img src={this.state.img} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <img src={this.state.img2} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <span>Best Seller</span>
              <img src={this.state.img2} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <img src={this.state.img2} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="img">
              <span>On Sale</span>
              <img src={this.state.img2} alt="" />
            </div>
            <h5>I'm a product</h5>
            <span className="price">$50.00</span>
          </div>
        </div>
      </>
    );
  }
}

export default Shop;
