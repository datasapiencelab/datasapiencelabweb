import { React } from "react";
import Logo from "/public/datasapiencelogo-nobg.png";
const NavBar = () => {
  return (
    <nav>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <img
            className="avatar mask mask-circle w-10 h-10 bg-white" // Adjust width and height as needed
            src={Logo.src}
            alt="Data Sapience Lab"
          />
          <a className="btn btn-ghost text-xl">Data Sapience Lab</a>
        </div>
        <div className="navbar-end join">
          <a className="btn join-item btn-ghost">Services</a>
          <a className="btn join-item btn-ghost">Portfolio</a>
          <a className="btn join-item btn-ghost">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
