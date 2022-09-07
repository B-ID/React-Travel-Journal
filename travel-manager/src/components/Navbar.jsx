import React from "react";
import "../styles/Navbar.css";
import { FaGlobeAfrica } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="icon">
        <FaGlobeAfrica />
      </span>
      <p>My Travel Journal.</p>
    </div>
  );
};

export default Navbar;
