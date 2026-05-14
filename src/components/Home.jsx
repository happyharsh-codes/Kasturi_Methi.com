import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
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
					<h1 className="font-naylorville">
						<b>Meet <span className="heading-nameplate">Kelly</span></b>
					</h1>
				</div>
				<div className="description">
					<p className="font-robert-regular">
						The Discord Mod Queen - lively humanly nature, with real moods,attitude and sass. Do not mess with her.
					</p>
				</div>
			</div>


			<div className="kellywindow">
				<img src="/faces/kellysleeping.png" alt="kelly sleeping" />

				<h2>
					<b>Oho, Kelly is sleeping ...</b>
				</h2>
			</div>
            
			<div className="buttons">
				<button className="chat-btn" onClick={() => navigate("/chats")} ><span className="flex-center">{<CiSearch/>}</span>Chat with Kelly</button>

				<button className="discord-btn" onClick={() => window.location.href="https://discord.com/invite/q7TZVJuCMD"}><b>Join Discord Drama</b></button>

			</div>
		</section>
	);
}

export default Home;
