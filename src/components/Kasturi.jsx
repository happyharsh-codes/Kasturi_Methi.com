import { useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../general.css";
import "../styles/kasturi.css";

gsap.registerPlugin(ScrollTrigger);


function Kasturi () {
  return (
    <section className="kasturi" id="kasturi">
      Kasturi
    </section>
  )
}

export default Kasturi