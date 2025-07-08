
import React, { useEffect } from "react";
import "./Callfor.scss";
import august from "../../../assets/image/aa.png";

const Callfor = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = document.querySelectorAll(
      "#callfor p, #callfor h1, #callfor img"
    );
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div id="callfor">
      <div className="container">
        <div className="callfor">
          <div className="callfor--box">
            <div className="callfor--box__text">
              <p>
                Үйлөнүү үлпөт тоюна арналган, <br /> салтанаттуу кечебизге келип, <br /> ак
                батаныздарды берип, кадырлуу <br /> коногубуз болуп кетүүгө чакырабыз.
              </p>
              <h1>Биз сиздерди күтөбүз!</h1>
              <img src={august} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callfor;
