import React from "react";
import { NavLink } from "react-router-dom";
import homeicon from "../../img/home2icon.png";

const Join = () => {
  return (
    <div className="home2">
      <div className="home2-container">
        {/* <div class="row"> */}
        <div className="home2-first-element">
          <p className="white-text">
            Ready to make your journey with us? Suscribe to our newsletter today.
          </p>
        </div>
        <img src={homeicon} className="home2-background" />
        <img src={homeicon} className="home2-background2" />

        <div class="home2-second-element">
          
          <div className="input-field">
            <input id="email" type="text" className="validate white-text" />
            <label className="active white-text" for="email">
              First Name
            </label>
          </div>
          <div className="input-field">
            <input id="email" type="text" className="validate white-text" />
            <label className="active white-text" for="email">
              Last Name
            </label>
          </div>
          <div className="input-field">
            <input id="email" type="email" className="validate white-text" />
            <label className="active white-text" for="email">
              Email
            </label>
          </div>
        </div>
        <div class="home2-third-element">
          <button>Suscribe</button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Join;
