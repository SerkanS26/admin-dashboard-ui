import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
