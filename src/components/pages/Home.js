import React from "react";
import { Link } from "react-router-dom";
import Join from "../layout/Join";
import { AiOutlineArrowRight } from "react-icons/ai";
import home3 from "../../img/home3.png";
import home4 from "../../img/home4.png";
import home4background from "../../img/home4background.png";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer"

const Home = () => {
  return (
    <div>
    <Navbar />
      <div className="home1">
        <div className="container">
          <div className="row home-image-text">
            <div className="col l6 s12">
              <br />
              <h3 className="white-text" style={{fontWeight: "bold"}}>
                Looking to growing your business with the right community?
              </h3>
              <br />
              <h5 className="white-text">
                Startup Accra is the best place for you to be. With a vast
                network of industry experts, mentors and investors, you're on
                your way to bulding a business that scale.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Join />
      <div className="home3">
        <div className="home3-container">
          <div className="home3-left">
            <br />
            <h3 style={{ color: "#5C5C5C" }}>
              Build your business while networking with smart people like you.
            </h3>
            <div className="home3-second-element">
              <p className="home3-p" style={{ color: "#5C5C5C" }}>
                Startup Accra is a place for you to be. With a vast network of
                industry experts, mentors and investors, you're on your way to
                building a business that scales.
              </p>
            </div>

            <Link className="green-text home3-p">
              Learn More <AiOutlineArrowRight className="arrow" />
            </Link>
          </div>
          <div className="home3-right grey lighten-3">
            <div className="home3-container">
              <img src={home3} style={{height:"100%",width:"100%"}} alt="networking" />
            </div>
          </div>
        </div>
      </div>
      <div className="home7">
        <img src={home4background} className="home7-background" />
        <div className="home7-container">
          <div className="home7-left"></div>
          <div className="home7-right">
              <div className="home7-first-element">
                <h4>Get to know us.</h4>
                </div>
              <div className="home7-second-element">
                <p className="home7-p" style={{ color: "#5C5C5C" }}>
                  Startup Accra is the place for you to be. With a vast network
                  of industry experts, mentors and investors, you’re on your way
                  to building a business that scales.
                </p>
            </div>
            <div className="home7-third-element">
            <Link className="green-text home7-p">
              Learn More <AiOutlineArrowRight className="arrow" />
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home5">
        <div className="home5-container">
          <h1>Come . Connect . Build</h1>
        </div>
      </div>
      <div className="home6">
        <div className="container">
          <h3 className="center">We are trusted by:</h3>
        </div>
      </div>
      <Join />
      <Footer />

    </div>
  );
};

export default Home;
