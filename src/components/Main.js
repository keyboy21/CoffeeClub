import "../styles/Main.css";
import { Parallax } from "react-parallax";
import Coffee from "../images/coffe.webp";
import Beans from "../images/1200px-Coffee_beans_by_gnokii.svg.png";
import Movie from "../video/file.mp4";
import Cup from "../images/Cup.webp";
import Beens from "../images/beens.webp";
import Blend from "../images/blend.webp";
import World from "../images/world.webp";

export default function Main() {
  return (
    <>
      <div className="main-title">
        <div className="container">
          <div className="row">
            <div className="main-head">
              <h2>Monthly Roasted&nbsp;</h2>
              <h2>Coffee Subscriptions</h2>
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-photo">
        <img src={Coffee} alt="" />
      </div>
      <div className="main-word">
        <div className="container">
          <div className="row">
            <p>How It Works</p>
          </div>
        </div>
      </div>
      <div className="main-video">
        <div className="main-movie">
          <video src={Movie} alt="" autoPlay loop="true" />
          <div className="main-text">
            <div className="main-info flex-wrap">
              <div className="text col-12 col-sm-4 col-md-4 col-lg-4">
                <span>01</span>
                <img src={Beans} width="70" height="70" alt="" />
                <p>
                  Pick Your <br /> Coffee
                </p>
              </div>
              <div className="text col-12 col-sm-4 col-md-4 col-lg-4">
                <span>02</span>
                <i className="fas fa-shopping-bag"></i>
                <p>
                  Select Your <br /> Subscriptions Plan
                </p>
              </div>
              <div className="text col-12 col-sm-4 col-md-4 col-lg-4">
                <span>03</span>
                <i className="fas fa-mug-hot"></i>
                <p>
                  Enjoy You <br /> Monthly Delivery
                </p>
              </div>
            </div>
            <div className="subs">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="container">
          <div className=" row">
            <div className=" col-12 col-md-6 col-lg-6 about-img">
              <img src={Cup} alt="" />
            </div>
            <div className=" col-12 col-md-6 col-lg-6 about-info">
              <h4>About Us</h4>
              <span>Speciality Coffee for Every Taste</span>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="beens">
        <img src={Beens} alt="" />
      </div>
      <Parallax bgImage={Blend} strength={700}>
        <div className="paralax" style={{ height: 800 }}></div>
      </Parallax>
      <div className="our-subscriptions">
        <div className="our">
          <h2>Our Subscriptions</h2>
        </div>
      </div>
      <section className="coffee-club">
        <div className="info-club">
          <div className="container">
            <div className="row">
              <div className="info col-12 col-sm-12 col-lg-4 ">
                <div className="in">
                  <i className="fas fa-border-none"></i>
                  <span>
                    Coffee Club's <br /> Starter Kit
                  </span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
              <div className="info col-12 col-sm-12 col-lg-4 ">
                <div className="in">
                  <i className="fas fa-border-none"></i>
                  <span>
                    Coffee Club's <br /> Roaster's Picks
                  </span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
              <div className="info col-12 col-sm-12 col-lg-4 ">
                <div className="in">
                  <i className="fas fa-border-none"></i>
                  <span>
                    Coffe of the <br /> Month
                  </span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subs">
          <button>Subscribe</button>
        </div>
      </section>
      <section className="better-world">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 world1">
              <div className="word">
                <h4>Better Coffee for a Better World</h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 world">
              <img src={World} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
