import ReactWOW from "react-wow";
import { Button } from "reactstrap";

export default class Pricing extends React.Component {
  render() {
    return (
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ReactWOW delay="0.3s" animation="fadeInUp">
                <div className="section-title">
                  <h2>Pricing Table</h2>
                  <p>
                    Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor coli incididunt ut labore Lorem ipsum
                    madolor sit amet, consectetur adipisicing incididunt.
                  </p>
                </div>
              </ReactWOW>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-4">
            <ReactWOW delay="0.6s" animation="fadeInUp">
                <div className="single-price-package">
                  <div className="price-header">
                    <h3>Business</h3>
                    <h4 className="price-value">
                      <sup>$</sup>
                      <span className="text-large">99</span>
                      <span className="duration">/Per Month</span>
                    </h4>
                  </div>

                  <ul className="price-list">
                    <li>UI / UX Design</li>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Web Developement</li>
                    <li>Wordpress Theme</li>
                    <li>24 / 7 Support</li>
                  </ul>

                  <div className="price-footer">
                    <span  className="purchase-btn"
                    className="purchase-btn"
                    onClick={this.props.show_modal}
                    attr-type="sign_in"
                    attr-purchase = "#1"
                    >
                      Purchase
                    </span>
                  </div>
                </div>
              </ReactWOW>
            </div>

            <div className="col-md-12 col-lg-4">
              <ReactWOW delay="0.5s" animation="fadeInUp">
                <div className="single-price-package personal-price-package">
                  <div className="price-header">
                    <h3>Personal</h3>
                    <h4 className="price-value">
                      <sup className="text-bottom">$</sup>
                      <span className="text-large">69</span>
                      <span className="duration">/Per Month</span>
                    </h4>
                  </div>

                  <ul className="price-list">
                    <li>UI / UX Design</li>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Web Developement</li>
                    <li className="disabled">Wordpress Theme</li>
                    <li className="disabled">24 / 7 Support</li>
                  </ul>

                  <div className="price-footer">
                    <span  className="purchase-btn"
                    className="purchase-btn"
                    onClick={this.props.show_modal}
                    attr-type="sign_in"
                    attr-purchase = "#2"
                    >
                      Purchase
                    </span>
                  </div>
                </div>
              </ReactWOW>
            </div>

            <div className="col-md-12 col-lg-4">
              <ReactWOW delay="0.6s" animation="fadeInUp">
                <div className="single-price-package">
                  <div className="price-header">
                    <h3>Business</h3>
                    <h4 className="price-value">
                      <sup>$</sup>
                      <span className="text-large">99</span>
                      <span className="duration">/Per Month</span>
                    </h4>
                  </div>

                  <ul className="price-list">
                    <li>UI / UX Design</li>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Web Developement</li>
                    <li>Wordpress Theme</li>
                    <li>24 / 7 Support</li>
                  </ul>

                  <div className="price-footer">
                    <span  className="purchase-btn"
                    className="purchase-btn"
                    onClick={this.props.show_modal}
                    attr-type="sign_in"
                    attr-purchase = "#3">
                      Purchase
                    </span>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
