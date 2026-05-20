import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/about.css";
import { setRetypeAnimation } from "../utils/textAnimations";

gsap.registerPlugin(ScrollTrigger);

const joinVariants = [
	{
		text: "JOIN THE KELLY DRAMA",
		color: [
			"var(--vintage-grape)",
			"var(--grinding-sky)",
			"var(--vintage-grape)",
			"var(--grapefruit-pink)",
		],
	},
	{
		text: "ENROLL IN MULTIVERSE OF MADNESS",
		color: [
			"var(--vintage-grape)",
			"var(--vintage-grape)",
			"var(--grapefruit-pink)",
			"var(--vintage-grape)",
			"var(--grinding-sky)",
		],
	},
	{
		text: "CRAZYY DRAMA ONGOING FR",
		color: [
			"var(--vintage-grape)",
			"var(--grinding-sky)",
			"var(--vintage-grape)",
			"var(--grapefruit-pink)",
		],
	},
	{
		text: "NEVER MISS OUT THE PEAK",
		color: [
			"var(--vintage-grape)",
			"var(--grapefruit-pink)",
			"var(--vintage-grape)",
			"var(--vintage-grape)",
			"var(--grinding-sky)",
		],
	},
];


function About() {
	const [DATA, setDATA] = useState({});
	const [selectedIndex, setSelectedIndex] = useState(0);
	const headerRef = useRef(null);
	const sliderRef = useRef(null);
	const contentHeadingRef = useRef(null);

    const onArrowClick = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({left: -120, behaviour: "auto"})
    };
    const onRightArrowClick = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({left: 120, behaviour: "smooth"})
    };

	const useMobileClick = (handler, timeout=1000) => (e) => {
		if (!isTouchDevice()){
			handler(e);
			return;
		}
		setTimeout(() => handler(e), timeout);
	};

	const goToDiscord = () => useMobileClick(() => window.location.href="https://discord.com/invite/q7TZVJuCMD",400);

	useGSAP(() => {
		if (headerRef.current) {
			setRetypeAnimation(headerRef.current, joinVariants, {
				backspaceSpeed: 30,
				typeingSpeed: 35,
				holdMs: 100,
			});
		}
	}, []);

	useEffect(() => {
		async function loadData() {
			try {
				const response = await fetch("/database/about.json");
				if (!response.ok) {
					throw new Error("FAILED TO LOAD: JSON FILES");
				}
				const data = await response.json();
				setDATA(data);
			} catch (err) {
				console.log(err);
			}
		}
		loadData();

		if (!contentHeadingRef.current) return;
		const name = Object.values(DATA)[selectedIndex]?.name ?? "";
		setRetypeAnimation(
			contentHeadingRef.current,
			[
				{
					text: name,
					color: ["var(--vintage-grape)", "var(--grinding-sky)"],
				},
			],
			{ typeingSpeed: 45, backspaceSpeed: 55, holdMs: 100 },
		);
	}, []);

	return (
		<section className="about" id="about">
			<h6 className="welcome-text reveal">WeLcome to Kelly</h6>
			<h1 ref={headerRef} className="heading font-naylorville">
				Join <b className="color-grinding-sky">The</b> Kelly{" "}
				<b className="color-grapefruit-pink">Drama</b>
			</h1>
            <div className="shilhoute-interactbox">
                <div className="arrow-button arrow-left" onClick={onArrowClick}>
                    <div className="arrow"></div>
                </div>
                <div className="slider" ref={sliderRef}>
                    <div className="slider-wrapper">
                        {Object.keys(DATA).length > 0 &&
                            Object.entries(DATA).map(([key, values], idx) => (
                                <div
                                    className={`cards ${selectedIndex == idx ? "active" : ""}`}
                                    key={idx}
                                    onClick={() => setSelectedIndex(idx)}
                                >
                                    <img
                                        src={values.image}
                                        alt={values.name}
                                        className="card-image"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="arrow-button arrow-right" onClick={onRightArrowClick}>
                    <div
                        className="arrow"
                        style={{ transform: "rotateZ(180deg)" }}
                    ></div>
                </div>
            </div>
			<div className="contents">
				{Object.keys(DATA).length > 0 && (
					<div className="content-box">
						<h3
							className="font-minecrafter heading"
							ref={contentHeadingRef}
						>
							{Object.values(DATA)[selectedIndex]?.name}
						</h3>
						<p className="description">
							{Object.values(DATA)[selectedIndex]?.description}
						</p>
						<button className="content-btn" onClick={goToDiscord}>
							<b>Join Drama</b>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

export default About;
