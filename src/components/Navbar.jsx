import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleSidebar }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (toggleSidebar) toggleSidebar(); // let parent open/close sidebar
  };

  return (
    <div className="navbar">
      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Title */}
      <h2>Dashboard</h2>

      {/* Search + Dark Toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;




