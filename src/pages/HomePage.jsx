import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Kasturi from "../components/Kasturi";
import Footer from "../components/Footer";

function HomePage() {
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
