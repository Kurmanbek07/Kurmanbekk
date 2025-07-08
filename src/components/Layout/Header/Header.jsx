// import React from "react";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <nav   id="header"
//     className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//       <div className="container-fluid header">
//         <a className="navbar-brand" href="#">
//           Башкы бет
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse header--nav" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Той жөнүндө
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="">
//                 Дареги
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Байланыштар
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from "react";
import "./Header.scss";

const Header = () => {
  // Функция для плавного скролла
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="header"
      className="navbar navbar-expand-lg navbar-light  fixed-top"
    >
      <div className="container-fluid header">
        <a className="navbar-brand" href="#hero" onClick={scrollToSection}>
          Башкы бет
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse header--nav"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#hero"
                onClick={scrollToSection}
              >
                Той жөнүндө
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#place" onClick={scrollToSection}>
                Дареги
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#start" onClick={scrollToSection}>
                Башталуу
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
