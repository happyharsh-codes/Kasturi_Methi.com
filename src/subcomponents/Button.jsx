import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../general.css";
import "../styles/button.css";

gsap.registerPlugin(ScrollTrigger);


function Button ( { label=null, symbol=null, classes="", animate=false, onClick=undefined}) {
  const textRef = useRef();
  return (
    <button className={ animate ? `${classes} btn btn-anim` : `${classes} btn` } onClick={onClick}>
      {symbol}
      <span className="textLine">
        <span ref={textRef} className="text">
          {label}
        </span>
      </span>
    </button>
  )
}

export default Button;