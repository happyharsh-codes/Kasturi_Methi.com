import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	return (
		<section className="about" id="about">
                <div className="kelly abouts">
                    <div className="about-nameplate"><p className="font-scribble">Kelly</p></div>
                    <div className="about-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, perspiciatis quidem. Tempora at dolorem quis eaque, ducimus non fuga nihil quisquam aliquid, voluptas est ex aspernatur inventore perferendis nam? Perferendis, tempora ea.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="faces/kellygigle.png" alt="kellygigle" />
						<svg width="0" height="0" style={{"position":"absolute"}}>
							<defs>
								<filter id="outline-kelly">
								<feMorphology in="SourceAlpha" operator="dilate" radius="5" result="expanded"/>
								<feFlood floodColor="#3a2e22" result="color"/>
								<feComposite in="color" in2="expanded" operator="in" result="outline"/>
								<feComposite in="SourceGraphic" in2="outline" operator="over"/>
								</filter>
							</defs>
						</svg>
                    </div>
                </div>
                <div className="giyu abouts">
                    <div className="about-image">
                        <img src="faces/kellyyawn.webp" alt="kellygigle" />
                    </div>
                    <div className="about-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, perspiciatis quidem. Tempora at dolorem quis eaque, ducimus non fuga nihil quisquam aliquid, voluptas est ex aspernatur inventore perferendis nam? Perferendis, tempora ea.
                        </p>
                    </div>
                    <div className="about-nameplate"><p className="font-scribble">Giyu</p></div>
                </div>
                <div className="ayasaka abouts">
                    <div className="about-nameplate"><p className="font-scribble">Ayasaka</p></div>
                    <div className="about-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, perspiciatis quidem. Tempora at dolorem quis eaque, ducimus non fuga nihil quisquam aliquid, voluptas est ex aspernatur inventore perferendis nam? Perferendis, tempora ea.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="faces/kellytired.png" alt="kellygigle" />
                    </div>
                </div>

		</section>
	);
};

export default About;
