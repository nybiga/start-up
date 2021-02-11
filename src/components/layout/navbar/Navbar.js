import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import SideNavbar from "./sidenav/SideNav";
import { AiOutlineMenu } from "react-icons/ai";
import "../../../home.css";

const Navbar = () => {
  return (
    <div>
      <div class="navbar-fixed">
        <nav style={{ backgroundColor: "#3ab675" }} class="white">
          <div class="container">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo black-text">
                {/* <Link className="hide-on-med-and-down">
                  <img src={Logo} alt="Logo" height="60px" />
                </Link>
                <Link className="left-align responsive-img hide-on-large-only">
                  <img src={Logo} alt="Logo" height="80px" />
                </Link> */}
              </a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <i class="material-icons icon-black">menu</i>
              </a>
              <ul class="nav-center hide-on-med-and-down">
                <li>
                  <a href="#home">About Us</a>
                </li>
                <li>
                  <a href="#search">Our Community</a>
                </li>
                <li>
                  <a href="#popular">Events</a>
                </li>
                <li>
                  <a href="#gallery">Startups</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="#home">About Us</a>
        </li>
        <li>
          <a href="#search">Our Community</a>
        </li>
        <li>
          <a href="#popular">Events</a>
        </li>
        <li>
          <a href="#gallery">Startups</a>
        </li>
      </ul>
    </div>
  );
  // return (
  //   <header>
  //     <div className="brand-logo">
  //       <Link className="hide-on-med-and-down">
  //         <img src={Logo} alt="Logo" height="80px" />
  //       </Link>
  //       <Link className="left-align responsive-img hide-on-large-only">
  //         <img src={Logo} alt="Logo" height="80px" />
  //       </Link>
  //       <Link className="sidenav-trigger menu" data-target="mobile-menu">
  //         <AiOutlineMenu className="black-text" fontSize="25px" />
  //       </Link>
  //     </div>

  //     <nav>
  //     <div className="nav-wrapper">
  //       <ul className="nav-links hide-on-med-and-down">
  //       <a href="#!" class="brand-logo">Logo</a>
  //     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  //         <li className="nav-link">
  //           <Link to="/" className=" link" style={{ color: "#5C5C5C" }}>
  //             About Us
  //           </Link>
  //         </li>
  //         <li className="nav-link">
  //           <Link to="/" className="link" style={{ color: "#5C5C5C" }}>
  //             Our Community
  //           </Link>
  //         </li>
  //         <li className="nav-link">
  //           <Link to="/" className="link" style={{ color: "#5C5C5C" }}>
  //             Events
  //           </Link>
  //         </li>
  //         <li className="nav-link">
  //           <Link to="/" className="link" style={{ color: "#5C5C5C" }}>
  //             Startups
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>

  //     </nav>
  //     <div className="nav-last hide-on-med-and-down">
  //      <Link to='/register'> <button className="nav-cta">Join Us</button></Link>
  //       <Link to='/login'><button className="nav-cta-login " style={{ color: "#5C5C5C" }}>
  //         Login
  //       </button></Link>
  //       {/* <SignedOutLinks />
  //       <SignedInLinks />
  //       <SideNavbar /> */}
  //     </div>
  //   </header>
  // );
};

export default Navbar;
