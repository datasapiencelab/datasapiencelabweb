import React from "react";
import Logo from "/public/datasapiencelogo.jpg"
import Link from "next/link";
const Footer = () =>{

    return(
        <footer className="footer p-10 bg-base-200 text-base-content glass">
        <aside>
        <img loading="lazy" className="mask mask-circle" src={Logo.src} alt="Data Sapience Lab Logo" />
        </aside> 
        <nav>
          <header className="footer-title underline">Services</header> 
          <Link href="/datascience" className="link link-hover hover:text-secondary">Data Analytics & Visualization</Link>
          <Link href="/aiml" className="link link-hover hover:text-secondary">Machine Learning</Link>
          <Link href="/software"className="link link-hover hover:text-secondary">Custom Website &amp; Mobile App</Link>
        </nav> 
        <nav>
          <header className="footer-title underline">Company</header> 
          <Link href="/aboutus" className="link link-hover hover:text-secondary">About us</Link>
          <Link href="/contactus" className="link link-hover hover:text-secondary">Contact</Link>
          <Link href="career" className="link link-hover hover:text-secondary">Career</Link>
        </nav> 
        <nav>
          <header className="footer-title underline">Legal</header> 
          <Link href="" className="link link-hover hover:text-secondary">Terms of use</Link>
          <Link href="" className="link link-hover hover:text-secondary">Privacy policy</Link>
          <Link href="" className="link link-hover hover:text-secondary">Cookie policy</Link>
        </nav>
      </footer>
    )
}

export default Footer