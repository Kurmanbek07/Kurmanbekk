
import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // отключаем, чтобы анимация сработала один раз
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div id="hero" ref={heroRef}>
      <div className="container">
        <div className="hero">
          <h1 className={visible ? "fadeInUp delay-0" : ""}>Урматтуу!</h1>

          <div className={`hero--container ${visible ? "fadeInUp delay-1" : ""}`}>
            <h2 className={visible ? "fadeInUp delay-2" : ""}>Биздин сыйлуу конокторубуз</h2>
            <h3 className={visible ? "fadeInUp delay-3" : ""}>Сиздерди балдарыбыз</h3>
            <h1 className={visible ? "fadeInUp delay-4" : ""}>Нурислам & Нурайымдын</h1>
            <h4 className={visible ? "fadeInUp delay-5" : ""}>01.08.2025</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
