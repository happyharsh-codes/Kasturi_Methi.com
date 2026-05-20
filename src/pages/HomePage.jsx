import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Kasturi from "../components/Kasturi";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function HomePage() {

	useGSAP(() => {
		gsap.fromTo(".reveal", { opacity: 0, scale: 0.8, yPercent: 10}, {
			scale: 1,
			opacity: 1,
			duration: 1,
			ease: "power2.in",
			scrollTrigger: {
				target: ".reveal",
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse"
			}
		})
	}, []);

	return (
		<>
			<Navbar />
			<main>
				<Home />
				<About />
				<Kasturi />
				<Footer />
			</main>
		</>
	);
}

export default HomePage;
