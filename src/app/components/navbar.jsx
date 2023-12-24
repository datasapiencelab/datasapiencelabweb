import {React} from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar bg-black">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Data Sapience Lab</a>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost btn-outline">Menu</a>
        </div>
        <div className="navbar-end">
            <a className="btn btn-ghost btn-outline">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
