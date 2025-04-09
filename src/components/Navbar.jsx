import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#ffffff";
    document.body.style.color = isDarkMode ? "#ffffff" : "#000000";
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="navbar navbar-expand-lg py-3 d-none d-lg-flex"
        style={{
          backgroundColor: isDarkMode ? "#121212" : "#09122c",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 px-2 text-white" to="/">
            SkyRideShop
          </NavLink>
          <button
            className="navbar-toggler mx-2 custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  <i className="fa fa-home me-1"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/product">
                  <i className="fa fa-box me-1"></i> Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">
                  <i className="fa fa-info-circle me-1"></i> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact">
                  <i className="fa fa-envelope me-1"></i> Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons text-center">
              <NavLink
                to="/login"
                className="btn m-2"
                style={{
                  border: "2px solid #ffc107",
                  color: "#ffc107",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.target.style.backgroundColor = "#ffc107"),
                  (e.target.style.color = "#09122c"))
                }
                onMouseLeave={(e) =>
                  ((e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#ffc107"))
                }
              >
                <i className="fa fa-sign-in-alt me-1"></i> Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn m-2"
                style={{
                  border: "2px solid #ffc107",
                  color: "#ffc107",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.target.style.backgroundColor = "#ffc107"),
                  (e.target.style.color = "#09122c"))
                }
                onMouseLeave={(e) =>
                  ((e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#ffc107"))
                }
              >
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn m-2"
                style={{
                  border: "2px solid #ffc107",
                  color: "#ffc107",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.target.style.backgroundColor = "#ffc107"),
                  (e.target.style.color = "#09122c"))
                }
                onMouseLeave={(e) =>
                  ((e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#ffc107"))
                }
              >
                <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
              </NavLink>
            </div>

            <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={isDarkMode}
                onChange={() => setIsDarkMode((prev) => !prev)}
              />
              <label className="form-check-label text-white" htmlFor="darkModeToggle">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav
        className="d-flex d-lg-none justify-content-around align-items-center p-2 fixed-bottom"
        style={{
          backgroundColor: isDarkMode ? "#121212" : "#09122c",
          borderTop: "1px solid #ffc107",
        }}
      >
        <NavLink to="/" className="text-white text-center">
          <i className="fa fa-home fs-4"></i>
          <div style={{ fontSize: "0.7rem" }}>Home</div>
        </NavLink>
        <NavLink to="/product" className="text-white text-center">
          <i className="fa fa-box fs-4"></i>
          <div style={{ fontSize: "0.7rem" }}>Products</div>
        </NavLink>
        <NavLink to="/cart" className="text-white text-center position-relative">
          <i className="fa fa-shopping-cart fs-4"></i>
          <div style={{ fontSize: "0.7rem" }}>Cart</div>
          {state.length > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
              style={{ fontSize: "0.6rem" }}
            >
              {state.length}
            </span>
          )}
        </NavLink>
        <NavLink to="/about" className="text-white text-center">
          <i className="fa fa-info-circle fs-4"></i>
          <div style={{ fontSize: "0.7rem" }}>About</div>
        </NavLink>
        <NavLink to="/contact" className="text-white text-center">
          <i className="fa fa-envelope fs-4"></i>
          <div style={{ fontSize: "0.7rem" }}>Contact</div>
        </NavLink>
      </nav>

      <style>
        {`
          .custom-toggler {
            border: 2px solid #ffc107 !important;
            background-color: #ffc107 !important;
            padding: 5px 10px;
            border-radius: 5px;
          }

          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2309122c' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
