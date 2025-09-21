import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left side: logo or title */}
      <div className="navbar-left">
        <h2>Dashboard</h2>
      </div>

      {/* Center: Search Bar */}
      <div className="search-container">
        <input className="search-input" placeholder="Search..." type="text" />
        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Right side: Dark Mode Toggle separate */}
      <div className="dark-toggle-wrapper">
        <DarkModeToggle className="dark-toggle" />
      </div>
    </div>
  );
};

export default Navbar;



