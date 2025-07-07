import React from "react";
import "./Callfor.scss";
import august from "../../../assets/image/aa.png";

const Callfor = () => {
  return (
    <div id="callfor">
      <div className="container">
        <div className="callfor">
          <div className="callfor--box">
            <div className="callfor--box__text">
              <p>
                Жашоодо кубанычтуу жана бактылуу <br /> көз ирмемдер болот, аны
                жакындарыңыз <br /> менен бөлүшкүңүз келет... <br /> Жакын жерде
                биздин жакындарыбыздын катышуусусуз элестетүү <br /> мүмкүн
                болбогон өзгөчө жана унутулгус окуялар бар... <br /> Жашообуздун
                эң бактылуу күнүнүн кубанычын <br />
                биз менен бөлүшүүгө чакырабыз! <br />
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
