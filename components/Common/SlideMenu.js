import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
import { css } from "@emotion/css";

const easeSlow = css`
  transition: all 450ms ease-in-out;
`;

const menuBtn = css`
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

const btnLine = css`
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

const menuOverlay = css`
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

class SlideMenu extends React.Component {
  state = {
    isMenuOpen: false,
    collapsed: true,

  };





  toggleMenu = () =>
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));

  render() {
    const { isMenuOpen } = this.state;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <>
        <div
          className={`${menuBtn} ${isMenuOpen ? "closer" : null}`}
          onClick={this.toggleMenu}
        >
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
        </div>

        <div className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
          <nav className="navbar-nav d-flex flex-column">
          <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => 100}
            className="nav-link active"
            href="#home"
          >
            Home
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#about"
          >
            About
          </AnchorLink>
        </li>
        {/* <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#features"
          >
            Features
          </AnchorLink>
        </li> */}
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#screenshots"
          >
            Screenshots
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#pricing"
          >
            Pricing
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#faqs"
          >
            Faqs
          </AnchorLink>
        </li>
        {/* <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#blog"
          >
            Blog
          </AnchorLink>
        </li> */}
          <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#app-download"
          >
            Download
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleMenu}
            offset={() => -30}
            className="nav-link"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li>
          </nav>
        </div>
       
      </>
    );
  }
}

export default SlideMenu;
