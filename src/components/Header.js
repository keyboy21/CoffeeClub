import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [cart, setCart] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top scrolling-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Coffee
            <span>Club</span>
          </Link>
          <div
            className="shopcart d-md-none d-lg-none"
            onClick={() => setCart(true)}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span> <span>0</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Subscriptions">
                  Subscriptions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="shopcart d-none d-md-block d-lg-block">
            <span>
              <i className="fas fa-user-circle"></i>Log In
            </span>
            <span onClick={() => setCart(true)}>
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span> <span>0</span>
            </span>
          </div>
        </div>
      </nav>
      <div className={cart ? "minicart active" : "minicart"}>
        <div className="head-cart">
          <i
            className={
              !cart ? "fas fa-chevron-right active" : "fas fa-chevron-right"
            }
            onClick={() => setCart(false)}
          ></i>
          <h3>Cart</h3>
        </div>
        <div className="bottom-cart">
          <p> Cart is empty</p>
        </div>
      </div>
    </>
  );
}
