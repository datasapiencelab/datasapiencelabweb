import React from "react";
import Logo from "/public/datasapiencelogo.jpg"
const Footer = () =>{

    return(
        <footer className="footer p-10 bg-base-200 text-base-content glass">
        <aside>
        <img className="mask mask-circle" src={Logo.src} alt="Data Sapience Lab Logo" />
        </aside> 
        <nav>
          <header className="footer-title underline">Services</header> 
          <a className="link link-hover hover:text-secondary">Data Analytics & Visualization</a>
          <a className="link link-hover hover:text-secondary">Machine Learning</a>
          <a className="link link-hover hover:text-secondary">Mobile App</a>
          <a className="link link-hover hover:text-secondary">Custom Website</a>
        </nav> 
        <nav>
          <header className="footer-title underline">Company</header> 
          <a className="link link-hover hover:text-secondary">About us</a>
          <a href="/contactus" className="link link-hover hover:text-secondary">Contact</a>
          <a className="link link-hover hover:text-secondary">Career</a>
          <a className="link link-hover hover:text-secondary">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title underline">Legal</header> 
          <a className="link link-hover hover:text-secondary">Terms of use</a>
          <a className="link link-hover hover:text-secondary">Privacy policy</a>
          <a className="link link-hover hover:text-secondary">Cookie policy</a>
        </nav>
      </footer>
    )
}

export default Footer