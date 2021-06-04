import "../styles/Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-6">
              <h5>Coffee Club Newsletter</h5>
              <p>
                Sign up to receive updates, subscription offers and alerts on
                limited-edition boxes
              </p>
              <form action="" className="form">
                <label htmlFor="" For="input">
                  Enter your email
                </label>
                <div>
                  <input type="email" id="input" required={true} />
                  <button>Submit</button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4 col-lg-3 ">
              <h6>Shop</h6>
              <ul>
                <li>
                  <a href="#!">Single Origins & Blends</a>
                </li>
                <li>
                  <a href="#!">Subscription Boxes</a>
                </li>
                <li>
                  <a href="#!">Shipping & Returns </a>
                </li>
                <li>
                  <a href="#!">Store Policy </a>
                </li>
                <li>
                  <a href="#!">Payment Methods</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h6>Contact</h6>
              <ul>
                <li>
                  <a href="#!">500 Terry Francois Street</a>
                </li>
                <li>
                  <a href="#!">Subscription Boxes</a>
                </li>
                <li>
                  <a href="#!">San Francisco, CA 94158 </a>
                </li>
                <li>
                  <a href="#!">info@mysite.com </a>
                </li>
                <li>
                  <a href="#!">Tel: 123-456-7890</a>
                </li>
              </ul>
            </div>
            <div
              className="footer_end"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <span>© 2023 by Coffee Club. </span>{" "}
              </div>
              <div>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
