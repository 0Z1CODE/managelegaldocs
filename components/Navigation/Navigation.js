import Image from "next/image";
import SlideMenu from "../Common/SlideMenu";
import { Button } from "reactstrap";
class Navigation extends React.Component {
  _isMounted = false;


  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("menu-shrink");
      } else {
        elementId.classList.remove("menu-shrink");
      }
    });
    window.scrollTo(0, 0);

    if (
      !(
        window.location.pathname === "/details-one" ||
        window.location.pathname === "/details-two" ||
        window.location.pathname === "/blog-one" ||
        window.location.pathname === "/blog-two" ||
        window.location.pathname === "/blog-three"
      )
    ) {
      let mainNavLinks = document.querySelectorAll("nav ul li a");

      window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach((link) => {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <nav
          id="navbar"
          className="navbar fixed-top navbar-expand-md navbar-light top-menu"
        >
          <div className="container ">
            <a className="navbar-brand" href="/">
              <Image src="/images/logosvg.svg" width="120px" height="50" />
            </a>
            <div className="d-flex align-items-center">
              <div className="login">
                <Button
                  type="button"
                  className="sign sign-in"
                  onClick={this.props.show_modal}
                  attr-type="sign_in"
                >
                  Sign In
                </Button>
                <Button
                  type="button"
                  className="sign sign-up"
                  onClick={this.props.show_modal}
                  attr-type="sign_up"
                >
                  Sign Up
                </Button>
              </div>
              <SlideMenu />
            </div>
          </div>
        </nav>
   
      </>
    );
  }
}

export default Navigation;
