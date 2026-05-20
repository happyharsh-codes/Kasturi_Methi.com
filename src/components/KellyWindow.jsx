import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { FaDiscord, FaReddit, FaMedium, FaYoutube, FaTwitter } from "react-icons/fa";
import { setupLinkRetype, applyWobble } from "../utils/textAnimations.js";
import "../general.css";
import "../styles/kellywindow.css";

gsap.registerPlugin(ScrollTrigger);
function KellyWindow() {
  return (
    <div>KellyWindow</div>
  )
}

export default KellyWindow;