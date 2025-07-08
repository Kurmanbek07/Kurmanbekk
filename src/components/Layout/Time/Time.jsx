// // import React from "react";

// // const Time = () => {
// //   const days = document.querySelector("#days");
// //   const hours = document.querySelector("#hours");
// //   const minutes = document.querySelector("#minutes");
// //   const seconds = document.querySelector("#seconds");

// //   const currentYear = new Date().getFullYear();
// //   const nextYear = new Date(`August 01 ${currentYear} 18:00:00`);
// //   const currentTime = new Date();
// //   const diff = nextYear - currentTime;
// //   // перевод в дни
// //   const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
// //   // перевод часов
// //   const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
// //   //перевод минут
// //   const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
// //   //перевод секунд
// //   const secondsLeft = Math.floor(diff / 1000) % 60;
// //   console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
   

// //   return (
// //     <div id="time">
// //       <div className="container">
// //         <div className="time">
// //           <h1>До свадьбы осталось</h1>
// //           <div className="time--count">
// //             <h2 id="days">00</h2>
// //             <small>дней</small>
// //           </div>
// //           <div className="time--count">
// //             <h2 id="hours">00</h2>
// //             <small>часов</small>
// //           </div>
// //           <div className="time--count">
// //             <h2 id="minutes">00</h2>
// //             <small>минуты</small>
// //           </div>
// //           <div className="time--count">
// //             <h2 id="seconds">00</h2>
// //             <small>секунды</small>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Time;
// import React, { useEffect, useState } from "react";
// import "./Time.scss"
// const Time = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const currentYear = new Date().getFullYear();
//       const nextYear = new Date(`August 01 ${currentYear} 18:00:00`);
//       const currentTime = new Date();
//       const diff = nextYear - currentTime;

//       if (diff <= 0) {
//         clearInterval(timer);
//         setTimeLeft({
//           days: "00",
//           hours: "00",
//           minutes: "00",
//           seconds: "00",
//         });
//         return;
//       }

//       const days = String(Math.floor(diff / 1000 / 60 / 60 / 24)).padStart(2, "0");
//       const hours = String(Math.floor((diff / 1000 / 60 / 60) % 24)).padStart(2, "0");
//       const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
//       const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div id="time">
//       <div className="container"> 
//         <div className="time">
//          <h1>Үйлөнүү тоюна чейин</h1>
//         <div className="time--flex">
//         <div className="time--flex__count">
//           <h2>{timeLeft.days}</h2>
//           <small>күн</small>
//         </div>
//         <div className="time--flex__count">
//           <h2>{timeLeft.hours}</h2>
//           <small>саат</small>
//         </div>
//         <div className="time--flex__count">
//           <h2>{timeLeft.minutes}</h2>
//           <small>мүнөт</small>
//         </div>
//         <div className="time--flex__count">
//           <h2>{timeLeft.seconds}</h2>
//           <small>секунд</small>
//         </div>
//       </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Time;
import React, { useEffect, useState } from "react";
import "./Time.scss";

const Time = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const currentYear = new Date().getFullYear();
      const targetDate = new Date(`August 01 ${currentYear} 18:00:00`);
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(Math.floor(diff / 1000 / 60 / 60 / 24)).padStart(2, "0");
      const hours = String(Math.floor((diff / 1000 / 60 / 60) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Анимация появления блока, когда он в видимости
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".time--flex__count");
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div id="time">
      <div className="container">
        <div className="time">
          <h1>Үйлөнүү тоюна чейин</h1>
          <div className="time--flex">
            <div className="time--flex__count">
              <h2>{timeLeft.days}</h2>
              <small>күн</small>
            </div>
            <div className="time--flex__count">
              <h2>{timeLeft.hours}</h2>
              <small>саат</small>
            </div>
            <div className="time--flex__count">
              <h2>{timeLeft.minutes}</h2>
              <small>мүнөт</small>
            </div>
            <div className="time--flex__count">
              <h2>{timeLeft.seconds}</h2>
              <small>секунд</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
