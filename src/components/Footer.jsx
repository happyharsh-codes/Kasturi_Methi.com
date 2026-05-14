import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/footer.css";
import { TiLocationArrow } from "react-icons/ti";
import {
	FaDiscord,
	FaReddit,
	FaMedium,
	FaYoutube,
	FaTwitter,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	const onHover = (event) => {
		const elem = event.target.querySelector("b");
		const tl = gsap
			.timeline({ paused: true })
			.to(elem, {
				yPercent: -120,
				scale: 0.85,
				ease: "back.in",
				duration: 0.1,
			})
			.set(elem, { yPercent: 120 })
			.to(elem, {
				yPercent: 0,
				scale: 1.1,
				ease: "back.out",
				duration: 0.1,
			});
		tl.play();
		event.target.addEventListener("mouseleave", () => {
			tl.reverse();
		});
	};

	return (
		<footer className="footer">
			<div className="heading">
				<b className="color-grapefruit-pink">Kasturi</b>
				<b className="font-general">_</b>
				<b className="color-grinding-sky">Methi</b>
				<b>.com</b>
			</div>
			<div className="links">
				<nav className="nav-links">
					<a href="#home" className="nav-element" onMouseEnter={onHover}>
						<span>
							<TiLocationArrow />
						</span>
						<b>Home</b>
					</a>
					<a href="#about" className="nav-element" onMouseEnter={onHover}>
						<span>
							<TiLocationArrow />
						</span>
						<b>About</b>
					</a>
					<a
						href="#kasturi"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Kasturi</b>
					</a>
					<a href="/chats" className="nav-element" onMouseEnter={onHover}>
						<span>
							<TiLocationArrow />
						</span>
						<b>Chat</b>
					</a>
					<a
						href="/feedback"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Feedback</b>
					</a>
				</nav>
				<nav className="nav-links">
					<a
						href="/discord"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<FaDiscord />
						</span>
						<b>Discord</b>
					</a>
					<a href="/reddit" className="nav-element" onMouseEnter={onHover}>
						<span>
							<FaReddit />
						</span>
						<b>Reddit</b>
					</a>
					<a href="/Medium" className="nav-element" onMouseEnter={onHover}>
						<span>
							<FaMedium />
						</span>
						<b>Medium</b>
					</a>
					<a
						href="/youtube"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<FaYoutube />
						</span>
						<b>Youtube</b>
					</a>
					<a
						href="/youtube"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<FaTwitter />
						</span>
						<b>Twitter</b>
					</a>
				</nav>
				<nav className="nav-links">
					<a
						href="https://kasturi.ai"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Kasturi AI</b>
					</a>
					<a
						href="https://kasturi.ai/products"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Products</b>
					</a>
					<a
						href="https://meet_the_dev.com"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Developer</b>
					</a>
					<a
						href="https://whoishappyharsh.com/careers"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Careers</b>
					</a>
					<a
						href="/contact"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Contact Us</b>
					</a>
				</nav>
			</div>
			<nav className="policies">
				<div style={{ "--area": "b" }}>
					<a href="/privacy">Privacy Policy</a>
				</div>
				<div style={{ "--area": "a" }}>
					<a href="#">
						<b
							className="font-general"
							style={{ fontSize: "1.6rem" }}
						>
							©
						</b>
						Kasturi_methi.com All Rights Reserved
					</a>
				</div>
				<div style={{ "--area": "c" }}>
					<a href="/toc">Terms of Conditions</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
