import OwlCarousel from "react-owl-carousel3";
import VisibilitySensor from "react-visibility-sensor";

const options = {
  items: 1,
  nav: true,
  dots: false,
  touchDrag: false,
  mouseDrag: false,
  autoplay: false,
  autoplayHoverPause: true,
  loop: true,
  navText: [
    "<i class='icofont-long-arrow-left'></i>",
    "<i class='icofont-long-arrow-right'></i>",
  ],
};

class Slider extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="hompage-slides-wrapper homes-bg-img angle-slides-wrapper-bg"
      >
        <OwlCarousel
          className="homepage-slides owl-carousel owl-theme"
          {...options}
        >
          {this.props.slideData.map((data, idx) => (
            <div className="single-slider-item" key={idx}>
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-lg-7">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="slider-text">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                              >
                                {data.heading}
                              </h1>
                              <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                              >
                                {data.text}
                              </p>

                              <div className="slide-button">
                                <a
                                  href="#"
                                  className={`
                                                                        slide-btn-white mr-10 ${
                                                                          isVisible
                                                                            ? "animated fadeInDown slow opacityOne"
                                                                            : ""
                                                                        }
                                                                    `}
                                >
                                  <i className="icofont-cloud-download"></i>
                                  Download
                                </a>
                                <a
                                  href="#"
                                  className={`
                                                                        slide-btn-bordered ${
                                                                          isVisible
                                                                            ? "animated fadeInDown slow opacityOne"
                                                                            : ""
                                                                        }
                                                                    `}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>

                      <div className="col-md-12 col-lg-5">
                        <div className="welcome-phone">
                          <img
                            src="/images/app-mockup-1.png"
                            alt="App Mockup image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}

Slider.defaultProps = {
  slideData: [
    {
      heading: "Manage all of your Stuff Using a Legal Docs",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Awesome Legal Docs  App",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

export default Slider;
