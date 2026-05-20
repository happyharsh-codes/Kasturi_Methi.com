import { useState, useEffect, useRef, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/home.css";
import {setRetypeAnimation} from  "../utils/textAnimations.js";

gsap.registerPlugin(ScrollTrigger);

const MEET_VARIANTS = [
  { text: "Meet Kelly",    color: ["var(--vintage-grape)", "var(--grinding-sky)" ]},
  { text: "Meet KELLY??", color: ["#c05020", "var(--mauve-shadow)"] },
  { text: "meet... kelly", color: ["#507090", "var(--vintage-grape)"] },
  { text: "Meet Kelly!!!",color: ["var(--vintage-grape)", "var(--grapefruit-pink)"] },
  { text: "WHO IS KELLY", color: ["#a03030", "#a03030", "var(--grinding-sky)"] },
];

const isTouchDevice = () => window.matchMedia("(hover: none) and (pointer: coarse)").matches;


function Home() {
	const navigate = useNavigate();
	const headingRef = useRef(null);
	const chatBtnRef = useRef(null);
	const discordBtnRef = useRef(null);
	const descRef = useRef(null);
	
	const useMobileClick = (handler, timeout=1000) => (e) => {
		if (!isTouchDevice()){
			handler(e);
			return;
		}
		setTimeout(() => handler(e), timeout);
	};
	
	const goToChat = () => useMobileClick(() => navigate("/chats"), 1000);
	const goToDiscord = () => useMobileClick(() => window.location.href="https://discord.com/invite/q7TZVJuCMD",400);


	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    	tl.from(".home .main-contents", { opacity: 0, y: -30, duration: 0.6 })
      	.from(".kellywindow",   { opacity: 0, scale: 0.85, duration: 0.5 }, "-=0.2")
      	.from(".home .buttons",       { opacity: 0, y: 20, duration: 0.5 }, "-=0.2");

		if (headingRef.current) {
			setRetypeAnimation(headingRef.current, MEET_VARIANTS, {
				backspaceSpeed: 50,
				typeingSpeed: 50,
				holdMs: 100,
			});
		}
	}, []);

	return (
		<section className="home" id="home">
			{/* Hidden SVG filter for kelly outline — needed by KellyWindow */}
			<svg width="0" height="0" style={{ position: "absolute" }}>
				<defs>
				<filter id="kelly-outline" x="-15%" y="-15%" width="130%" height="130%">
					<feMorphology in="SourceAlpha" operator="dilate" radius="4" result="expanded"/>
					<feFlood floodColor="#3a2e22" result="color"/>
					<feComposite in="color" in2="expanded" operator="in" result="outline"/>
					<feComposite in="SourceGraphic" in2="outline" operator="over"/>
				</filter>
				</defs>
			</svg>

			<div className="main-contents">
				<div className="heading">
					<h1 className="font-naylorville" ref={headingRef}>
						<b>Meet <span className="color-grinding-sky">Kelly</span></b>
					</h1>
				</div>
				<div className="description">
					<p className="font-robert-regular" ref={descRef}>
						<b>The Discord Mod Queen - lively humanly nature, with real moods,attitude and sass. Do not mess with her.</b>
					</p>
				</div>
			</div>

			{/* <KellyWindow /> */}
			<div className="kellywindow">
				<img src="/faces/kellysleeping.webp" alt="kelly sleeping" />

				<h2>
					<b>Oho, Kelly is sleeping ...</b>
				</h2>
			</div>
            
			<div className="buttons">
				<button className="chat-btn" ref={chatBtnRef} onClick={goToChat} ><span><img src="/faces/kellyintro.gif" alt="" className="kellyicon" /></span>Chat with Kelly<div className="flex-center chat-arrow">{<FaLocationArrow/>}</div></button>

				<button className="discord-btn" ref={discordBtnRef} onClick={goToDiscord}><b>Join Discord Drama</b></button>

			</div>
		</section>
	);
}

export default Home;
