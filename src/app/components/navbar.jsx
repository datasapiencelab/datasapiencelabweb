import { React } from "react";
import Logo from "/public/datasapiencelogo-nobg.png";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-secondary lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <details>
                <summary className="dropdown">Services</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/datascience">Data Analytics &amp; Visualization</Link>
                  </li>
                  <li>
                    <Link href="/aiml">A.I. &amp; Machine Learning</Link>
                  </li>
                  <li>
                    <Link href="/software">Custom Website &amp; Apps</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="">Consultancy</Link>
            </li>
            <li className="skeleton">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <img
            className="avatar mask mask-circle w-10 h-10 bg-white" // Adjust width and height as needed
            loading="lazy"
            src={Logo.src}
            alt="Data Sapience Lab"
          />
          Data Sapience Lab
        </Link>
      </div>
      <div className="navbar-center z-[1] hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-1">
                <li>
                  <Link className="text-nowrap" href="/datascience">Data Analytics &amp; Visualization</Link>
                </li>
                <li>
                  <Link className="text-nowrap" href="/aiml">A.I. &amp; Machine Learning</Link>
                </li>
                <li>
                  <Link className="text-nowrap" href="/software">Custom Website &amp; Apps</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="">Consultancy</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/contactus"}>
          <button
            className="btn btn-secondary btn-outline 
          hover:btn-secondary hover:btn-full rounded-full hover:shadow-secondary transition-colors duration-300 ease-in-out
          hidden md:flex"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
