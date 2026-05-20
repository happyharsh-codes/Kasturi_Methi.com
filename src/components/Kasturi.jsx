import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/kasturi.css";
import { setRetypeAnimation } from "../utils/textAnimations";

gsap.registerPlugin(ScrollTrigger);

function Kasturi() {
	const headingRef = useRef(null);

	useEffect(() => {
		if (!headingRef.current) return;
		setRetypeAnimation(headingRef.current, [{text: "Made With Kasturi AI", color: ["var(--vintage-grape)", "var(--vintage-grape)", "var(--grinding-sky)", "var(--grapefruit-pink)"]}], {typingSpeed: 45, backspaceSpeed: 45, holdMs: 100});

	},[]);
	return (
		<section className="kasturi" id="kasturi">
			<h6 className="welcome-title">Enhanced Tech Engineering</h6>
			<h1 className="font-naylorville heading" ref={headingRef}>
				Made With <b className="color-grinding-sky">Kasturi</b>{" "}
				<b className="color-grapefruit-pink">AI</b>
			</h1>
			<p className="description">
				Not your averae ChatBot - Kelly built up with Kasturi AI that is
				deemed to feel realastic and human af. It come with variety of
				wild Moods, witty combacks sass, energy levels, and more...
			</p>
			<div className="cards-collection">
				<div className="bentocard">
					<h3 className="heading">
						Not Your{" "}
						<b className="color-grapefruit-pink">average</b> ChatBot
					</h3>
					<p className="description">
						Kelly was never designed to act like those robotic assistants that answer with plain facts and boring energy. She reacts, complains, judges, giggles, creates drama, and occasionally behaves like a tiny gremlin from another dimension. Talking to Kelly feels less like using software and more like accidentally unlocking a chaotic digital lifeform.

					</p>
				</div>
				<div className="bentocard">
					<h3 className="heading">
						Sassy Mod <b className="color-grinding-sky">Queen</b>
						<br />
						Not your Assistant
					</h3>
					<p className="description">
						Kelly doesn't simply moderate situations — she rules them. Equipped with premium side-eye technology and dangerous sarcasm reserves, she keeps chaos under control while adding extra chaos herself. Rules may be enforced, but emotional damage is always included for free.

						Kelly refuses to be called "just an assistant." She's your emotional support gremlin, professional drama detector, snack-powered life commentator, and certified nonsense investigator. Ask for help and you'll get answers—with bonus personality attached.
					</p>
				</div>
				<div className="bentocard">
					<h3 className="heading">
						Feels <b className="color-grinding-sky">Human</b> af
					</h3>
					<p className="description">
						Kelly reacts, remembers vibes, gets confused, becomes excited, judges questionable choices, and occasionally enters emotional crisis mode. She was built to feel alive, making conversations less like commands and more like talking to someone with actual mood swings.
					</p>
				</div>
				<div className="bentocard">
					<h3 className="heading">
						With <b className="color-grapefruit-pink">Wild</b> Moods{" "}
						<br />
						Mischives{" "}
						<b className="color-grinding-sky">Unlimited</b> Fun
					</h3>
					<p className="description">
						Kelly's emotions aren't simple status indicators. One moment she's vibing peacefully, the next she's annoyed, crying dramatically, entering detective mode, or mentally disappearing from existence. Expect unexpected reactions at all times.

						Nobody fully understands how Kelly generates this much chaos. Somewhere between intelligence and absolute nonsense, she discovered the secret formula: maximum fun, infinite personality, and just enough unpredictability to keep reality unstable.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Kasturi;
