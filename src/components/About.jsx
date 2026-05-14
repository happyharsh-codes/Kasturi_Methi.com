import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../general.css";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

function About () {
    const [selected, setSelected] = useState(null);

    const onClick = () => {

    }


	return (
		<section className="about" id="about">
            <h6 className="welcome-text">WeLcome to Kelly</h6>
            <h1 className="heading font-naylorville">Join <b className="color-grinding-sky">The</b> Kelly <b className="color-grapefruit-pink">Drama</b></h1>
            <div className="slider">
                <div className="cards">
                    <img src="/faces/kellybored.gif" alt="kellybored" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellygigle.png" alt="kellygigle" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellysalute.png" alt="kellysalute" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellysimping.webp" alt="kellysimping" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellypout.png" alt="kellypout" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellysob.png" alt="kellysob" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellycry.png" alt="kellycry" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellylaugh.png" alt="kellylaugh" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellyblush.png" alt="kellyblush" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellyembaress.png" alt="kellyembaress" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellyannoyed.png" alt="kellyannoyed" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellyenjoying.webp" alt="kellyenjoying" className="card-image" />
                </div>
                <div className="cards">
                    <img src="/faces/kellyidontcare.png" alt="kellyidontcare" className="card-image" />
                </div>
            </div>
            <div className="contents">
                <div className="content-box">
                    <div className="arrow"></div>
                    <h3 className="font-minecrafter heading">Kelly <b className="color-grinding-sky">Cry</b></h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eveniet eligendi adipisci sunt odit repellendus velit officia natus nulla? Eius quibusdam amet, ad, assumenda modi vel iure ducimus similique repellat accusamus magnam.</p>
                    <button className="content-btn"><b>Join Drama</b></button>
                </div>
            </div>

		</section>
	);
};

export default About;
