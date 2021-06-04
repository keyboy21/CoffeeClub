import React from "react";
import "../styles/Subscriptions.css";
import Starter1 from "../images/startter1.webp";
import Roaster1 from "../images/roaster1.webp";
import Month1 from "../images/month1.webp";
import Starter from "../images/staerter.webp";
import Month from "../images/month.webp";
import Roaster from "../images/roaster.webp";

class Subscriptions extends React.Component {
  state = {
    img: Starter1,
    img2: Roaster1,
    img3: Month1,
  };

  render() {
    return (
      <>
        <div className="subscriptions_head">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h4>
                  Shop <br /> Subscription Boxes
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
        <div className="subscriptions_bottom">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4"
                onMouseOver={() =>
                  this.setState({
                    img: Starter,
                  })
                }
                onMouseOut={() => {
                  this.setState({
                    img: Starter1,
                  });
                }}
              >
                <div className="img">
                  <img src={this.state.img} alt="" />
                </div>
                <h5>Coffee Club’s Starter Kit</h5>
                <span className="price">$50.00</span>
              </div>
              <div
                className="col-lg-4"
                onMouseOver={() =>
                  this.setState({
                    img2: Roaster,
                  })
                }
                onMouseOut={() => {
                  this.setState({
                    img2: Roaster1,
                  });
                }}
              >
                <div className="img">
                  <img src={this.state.img2} alt="" />
                  <span>Best Seller</span>
                </div>
                <h5>
                  Coffee Club’s <br /> Roaster’s Picks
                </h5>
                <span className="price">$50.00</span>
              </div>
              <div
                className="col-lg-4"
                onMouseOver={() =>
                  this.setState({
                    img3: Month,
                  })
                }
                onMouseOut={() => {
                  this.setState({
                    img3: Month1,
                  });
                }}
              >
                <div className="img">
                  <img src={this.state.img3} alt="" />
                </div>
                <h5>Coffee of the Month</h5>
                <span className="price">$50.00</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subscriptions;
