exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 3201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

class Footer extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return __jsx("footer", {
      id: "footer"
    }, __jsx("div", {
      className: "footer-bottom"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-6 col-lg-6"
    }, __jsx("p", {
      className: "copyright"
    }, "Copyright @2021 Legal Docs.")), __jsx("div", {
      className: "col-md-6 col-lg-6"
    }, __jsx("ul", {
      className: "social-links"
    }, __jsx("li", null, "Follow us :"), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "icofont-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "icofont-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "icofont-google-plus"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "icofont-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "icofont-pinterest"
    }))))))))));
  }

}

/***/ }),

/***/ 2574:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GoTop extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "onScrollStep", () => {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    });

    _defineProperty(this, "scrollToTop", () => {
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({
        intervalId: intervalId
      });
    });

    _defineProperty(this, "renderGoTopIcon", () => {
      if (this.state.thePosition) {
        return __jsx("div", {
          id: "toTop",
          className: "back-top-button",
          onClick: this.scrollToTop
        }, __jsx("i", {
          className: "icofont-arrow-up"
        }));
      }
    });

    this.state = {
      intervalId: 0,
      thePosition: false
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({
          thePosition: true
        });
      } else {
        this.setState({
          thePosition: false
        });
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.renderGoTopIcon());
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (GoTop);

/***/ }),

/***/ 8429:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Navigation_Navigation; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(4275);
;// CONCATENATED MODULE: ./components/Common/SlideMenu.js
var __jsx = (external_react_default()).createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const easeSlow = css_.css`
  transition: all 450ms ease-in-out;
`;
const menuBtn = css_.css`
  cursor: pointer;
  margin-top: 5px;

  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
    position: absolute;
    z-index: 3;
    right: 35px;
    top: 35px;
  }
`;
const btnLine = css_.css`
  width: 28px;
  height: 2px;
  margin: 0 0 5px 0;
  background-color: #fff;
  ${easeSlow};
  &.closer {
    background-color: #fff;
    &:nth-child(1) {
      transform: rotate(45deg) translate(0px, 0px);
      width: 20px;
    }
    &:nth-child(2) {
      transform: translateX(-11px);
      // width: 20px;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(0px, 0px);
      width: 20px;
    }
  }
`;
const menuOverlay = css_.css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  height: 100vh;
  width: 30vw;
  transform: translateX(100%);
  transition: all 500ms ease-in-out;
  &.show {
    background-color: #35437a;
    transform: translateX(0%);
  }
  nav {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      height: 30px;
      text-decoration: none;
      color: #eb4c54;
      cursor: pointer;
      transition: all 150ms ease-in-out;
      &:hover {
        color: #f28eba;
      }
    }
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

class SlideMenu extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isMenuOpen: false,
      collapsed: true
    });

    _defineProperty(this, "toggleMenu", () => this.setState(({
      isMenuOpen
    }) => ({
      isMenuOpen: !isMenuOpen
    })));
  }

  render() {
    const {
      isMenuOpen
    } = this.state;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return __jsx((external_react_default()).Fragment, null, __jsx("div", {
      className: `${menuBtn} ${isMenuOpen ? "closer" : null}`,
      onClick: this.toggleMenu
    }, __jsx("div", {
      className: `${btnLine} ${isMenuOpen ? "closer" : null}`
    }), __jsx("div", {
      className: `${btnLine} ${isMenuOpen ? "closer" : null}`
    }), __jsx("div", {
      className: `${btnLine} ${isMenuOpen ? "closer" : null}`
    })), __jsx("div", {
      className: `${menuOverlay} ${isMenuOpen ? "show" : null}`
    }, __jsx("nav", {
      className: "navbar-nav d-flex flex-column"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => 100,
      className: "nav-link active",
      href: "#home"
    }, "Home")), __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => -30,
      className: "nav-link",
      href: "#about"
    }, "About")), __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => -30,
      className: "nav-link",
      href: "#screenshots"
    }, "Screenshots")), __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => -30,
      className: "nav-link",
      href: "#pricing"
    }, "Pricing")), __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => -30,
      className: "nav-link",
      href: "#faqs"
    }, "Faqs")), __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => -30,
      className: "nav-link",
      href: "#app-download"
    }, "Download")), __jsx("li", {
      className: "nav-item"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      onClick: this.toggleMenu,
      offset: () => -30,
      className: "nav-link",
      href: "#contact"
    }, "Contact")))));
  }

}

/* harmony default export */ var Common_SlideMenu = (SlideMenu);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./components/Navigation/Navigation.js

var Navigation_jsx = (external_react_default()).createElement;

function Navigation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Image from "next/image";



class Navigation extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    Navigation_defineProperty(this, "_isMounted", false);
  }

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

    if (!(window.location.pathname === "/details-one" || window.location.pathname === "/details-two" || window.location.pathname === "/blog-one" || window.location.pathname === "/blog-two" || window.location.pathname === "/blog-three")) {
      let mainNavLinks = document.querySelectorAll("nav ul li a");
      window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        mainNavLinks.forEach(link => {
          let section = document.querySelector(link.hash);

          if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
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
    return Navigation_jsx((external_react_default()).Fragment, null, Navigation_jsx("nav", {
      id: "navbar",
      className: "navbar fixed-top navbar-expand-md navbar-light top-menu"
    }, Navigation_jsx("div", {
      className: "container "
    }, Navigation_jsx("a", {
      className: "navbar-brand",
      href: "/"
    }, Navigation_jsx("img", {
      src: "/images/logosvg.png",
      alt: "client Image"
    })), Navigation_jsx("div", {
      className: "d-flex align-items-center"
    }, Navigation_jsx("div", {
      className: "login"
    }, Navigation_jsx(external_reactstrap_.Button, {
      type: "button",
      className: "sign sign-in",
      onClick: this.props.show_modal,
      "attr-type": "sign_in"
    }, "Sign In"), Navigation_jsx(external_reactstrap_.Button, {
      type: "button",
      className: "sign sign-up",
      onClick: this.props.show_modal,
      "attr-type": "sign_up"
    }, "Sign Up")), Navigation_jsx(Common_SlideMenu, null)))));
  }

}

/* harmony default export */ var Navigation_Navigation = (Navigation);

/***/ }),

/***/ 380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

class Loader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return __jsx("div", {
      className: "preloader-wrap"
    }, __jsx("div", {
      className: "preloader"
    }, __jsx("span", null), __jsx("span", null), __jsx("span", null), __jsx("span", null), __jsx("span", null), __jsx("span", null)));
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (Loader);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;