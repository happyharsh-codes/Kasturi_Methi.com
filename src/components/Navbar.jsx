import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import Button from "../subcomponents/Button.jsx"
import { RxHamburgerMenu } from "react-icons/rx"
import "../general.css";
import "../styles/navbar.css";

gsap.registerPlugin(ScrollTrigger);


function Navbar ({hamburger=true}) {
  const overlayRef = useRef();

  const openNav = () => {
    if (overlayRef.current) {
      overlayRef.current.style.visibility = "visible";
    }
  } 
  
  const closeNav = () => {
    if (overlayRef.current) {
      overlayRef.current.style.visibility = "hidden";
    }
  } 
  return (
    <>
      <header className="navbar">
          <div className="site-title">
            <a href="#"><h1 className="font-maus">Kasturi_Methi.com</h1></a>
            <img src="/navframe.png" alt="background" className="nav-background" style={{"--position": "0%"}}  />
            <img src="/navframe.png" alt="background" className="nav-background" style={{"--position": "100%"}} />
          </div>
          <div className="nav-btn">
            <Button symbol={<RxHamburgerMenu />} onClick={openNav} />
          </div>
      </header>
      { hamburger && (<aside ref={overlayRef} className="nav-overlay">
        <nav>
          <a href="#home" onClick={closeNav}>Home</a>
          <a href="#about" onClick={closeNav}>About</a>
          <a href="#kasturi" onClick={closeNav}>Kasturi</a>
          <a href="#footer" onClick={closeNav}>footer</a>
        </nav>
      </aside>)}
    </>
  )
}

export default Navbar