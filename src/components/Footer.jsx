import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#ffffff";
    document.body.style.color = isDarkMode ? "#ffffff" : "#000000";
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <footer
      className="text-center py-4"
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#09122c",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <h5 className="mb-3">Our Items</h5>
        <ul className="list-inline" style={{ fontSize: "18px", fontWeight: "500" }}>
          {["Boat", "Car", "Electric Scooter", "Gun", "Mobile Home", "Helicopter"].map((item) => (
            <li className="list-inline-item mx-3" key={item}>
              <a href="#" className="text-warning text-decoration-none">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <hr style={{ backgroundColor: "white" }} />

        <p className="mb-3">
          Made with ❤️ by{" "}
          <a
            href="https://muzamil-ahmad-dev.github.io/"
            className="text-warning text-decoration-underline fs-6"
            target="_blank"
            rel="noreferrer"
          >
            Muzamil Ahmad
          </a>
        </p>

        <a
          className="text-warning fs-4"
          href="https://github.com/muzamil-ahmad-dev"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
