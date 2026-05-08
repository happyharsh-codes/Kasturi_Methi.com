import { useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../general.css";
import "../styles/footer.css";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  return (
    <footer id="footer">
      footer
    </footer>
  )
}

export default Footer