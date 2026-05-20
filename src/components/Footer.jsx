import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/footer.css";
import { Link } from "react-router-dom";
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
		<footer className="footer" id="footer">
			<div className="heading">
				<b className="color-grapefruit-pink">Kasturi</b>
				<b className="font-general">_</b>
				<b className="color-grinding-sky">Methi</b>
				<b>.com</b>
			</div>
			<div className="links">
				<nav className="nav-links">
					<Link to="#home" className="nav-element" onMouseEnter={onHover}>
						<span>
							<TiLocationArrow />
						</span>
						<b>Home</b>
					</Link>
					<Link to="#about" className="nav-element" onMouseEnter={onHover}>
						<span>
							<TiLocationArrow />
						</span>
						<b>About</b>
					</Link>
					<Link
						to="#kasturi"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Kasturi</b>
					</Link>
					<Link to="/chats" className="nav-element" onMouseEnter={onHover}>
						<span>
							<TiLocationArrow />
						</span>
						<b>Chat</b>
					</Link>
					<Link
						to="/feedback"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Feedback</b>
					</Link>
				</nav>
				<nav className="nav-links">
					<Link
						to="/discord"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<FaDiscord />
						</span>
						<b>Discord</b>
					</Link>
					<Link to="/reddit" className="nav-element" onMouseEnter={onHover}>
						<span>
							<FaReddit />
						</span>
						<b>Reddit</b>
					</Link>
					<Link to="/Medium" className="nav-element" onMouseEnter={onHover}>
						<span>
							<FaMedium />
						</span>
						<b>Medium</b>
					</Link>
					<Link
						to="/youtube"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<FaYoutube />
						</span>
						<b>Youtube</b>
					</Link>
					<Link
						to="/youtube"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<FaTwitter />
						</span>
						<b>Twitter</b>
					</Link>
				</nav>
				<nav className="nav-links">
					<Link
						to="https://kasturi.ai"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Kasturi AI</b>
					</Link>
					<Link
						to="https://kasturi.ai/products"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Products</b>
					</Link>
					<Link
						to="https://meet_the_dev.com"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Developer</b>
					</Link>
					<Link
						to="https://whoishappyharsh.com/careers"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Careers</b>
					</Link>
					<Link
						to="/contact"
						className="nav-element"
						onMouseEnter={onHover}
					>
						<span>
							<TiLocationArrow />
						</span>
						<b>Contact Us</b>
					</Link>
				</nav>
			</div>
			<nav className="policies">
				<div style={{ "--area": "b" }}>
					<Link to="/privacy">Privacy Policy</Link>
				</div>
				<div style={{ "--area": "a" }}>
					<Link to="#">
						<b
							className="font-general"
							style={{ fontSize: "1.6rem" }}
						>
							©
						</b>
						Kasturi_methi.com All Rights Reserved
					</Link>
				</div>
				<div style={{ "--area": "c" }}>
					<Link to="/toc">Terms of Conditions</Link>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
