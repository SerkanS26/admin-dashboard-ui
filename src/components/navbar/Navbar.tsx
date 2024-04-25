import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img className="icon" src="search.svg" alt="search icon" />
        <img className="icon" src="app.svg" alt="app icon" />
        <img className="icon" src="expand.svg" alt="expand icon" />
        <div className="notification">
          <img src="notifications.svg" alt="notification icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>John</span>
        </div>
        <img className="icon" src="settings.svg" alt="settings icon" />
      </div>
    </div>
  );
};

export default Navbar;
