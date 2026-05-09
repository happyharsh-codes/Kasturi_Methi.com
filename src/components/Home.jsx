import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../subcomponents/Button.jsx";
import "../general.css";
import "../styles/home.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
	const navigate = useNavigate();
	
	return (
		<section className="home" id="home">
			<div className="main-contents">
				<div className="heading">
					<h1>
						Meet <span>Kelly</span>
					</h1>
				</div>
				<div className="description">
					<p>
						The Discord Mod Queen - lively humanly nature, with real moods,attitude and sass. Do not mess with her.
					</p>
				</div>
			</div>


			<div className="kellywindow">
				<img src="/faces/kellysleeping.png" alt="kelly sleeping" />

				<h2>
					Oho, Kelly is sleeping ...
				</h2>
			</div>
            
			<div className="buttons">
				<button className="chat-btn" onClick={() => navigate("/chats")} >Chat with Kelly</button>

				<button className="discord-btn" onClick={() => window.location.href="https://discord.com/invite/q7TZVJuCMD"}>Join Discord Drama</button>

			</div>
		</section>
	);
}

export default Home;
