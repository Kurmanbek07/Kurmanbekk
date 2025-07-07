import React from "react";
import "./Start.scss";
import { PiMapPinArea } from "react-icons/pi";

import { BiDish } from "react-icons/bi";
const Start = () => {
  return (
    <div id="start">
      <div className="container">
        <div className="start">
          <h1>Күндүн планы</h1>
          <div className="start--width">
            <div className="start--width__flex">
              <a href="">
                <PiMapPinArea />
              </a>
              <div className="start--width__flex--text">
                <h1>18:00</h1>
                <h2>конокторду чогултуу</h2>
                <p>
                  Иш-чарага бара жатканыңызда <br /> жагымдуу жылмаюуңузду жана
                  <br /> жакшы маанайыңызды ала келиңиз.
                </p>
              </div>
            </div>
            <div className="start--width__flex">
              <a href="">
                <BiDish />
              </a>

              <div className="start--width__flex--text">
                <h1>20:00</h1>
                <p>
                  Даамдуу тамак-аш, бий <br /> жана кызыктуу убакыт.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
