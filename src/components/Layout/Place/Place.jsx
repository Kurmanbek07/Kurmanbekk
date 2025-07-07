import React from "react";
import "./Place.scss";
const Place = () => {
  return (
    <div id="place">
      <div className="container">
        <div className="place">
          <h1>Өтүүчү жер</h1>
          <div className="place--text">
            <h2>Ресторан "Кайлас" </h2>
            <h2> дареги </h2>
            <h2>Фрунзе көчөсү, 127/1</h2>
          </div>
          <div className="place--map" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.4100382011051!2d74.44443122022658!3d42.873351052983054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ecf6a8f6eda4f%3A0x3e5b1ebcfc5b669!2z0JrQsNC50LvQsNGB!5e0!3m2!1sru!2skg!4v1751731132591!5m2!1sru!2skg"
              width="90%"
              height="100%"
              style={{ border: "0", borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
          <h2>Сиздин ыңгайлуулугуңуз үчүн биз <br /> карта даярдап койдук. Сиз үйлөнүү үлпөтүн <br /> оңой таап, бизди өзүңүздүн катышуусуңуз <br /> менен кубантасыз деп ишенебиз!</h2>
        </div>
      </div>
    </div>
  );
};

export default Place;
