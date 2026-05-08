import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../subcomponents/Button.jsx";
import "../general.css";
import "../styles/home.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
	return (
		<section className="home" id="home">
			<div className="relative">
				<img
					src="faces/kellysleeping.png"
					alt="kelly"
					id="kelly-action-img"
				/>
				<div className="action-symbol">Z</div>
				<div className="action-symbol" style={{ animationDelay: "1s" }}>
					Z
				</div>
				<div className="action-symbol" style={{ animationDelay: "2s" }}>
					Z
				</div>
			</div>
			<h4 className="action-desc font-scribble">Kelly is sleeping</h4>
			<Button
				label="Talk to Kelly"
				animate={true}
				classes="talk-btn"
				onClick={() => (window.location.href = "chats")}
			/>

            
		</section>
	);
}

export default Home;
