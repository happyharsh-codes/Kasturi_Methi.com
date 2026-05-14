import { useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../general.css";
import "../styles/kasturi.css";

gsap.registerPlugin(ScrollTrigger);


function Kasturi () {
  return (
    <section className="kasturi" id="kasturi">
      <h6 className="welcome-title">Enhanced Tech Engineering</h6>
      <h1 className="font-naylorville heading" >Made With <b className="color-grinding-sky">Kasturi</b> <b className="color-grapefruit-pink">AI</b></h1>
      <p className="description">Not your averae ChatBot - Kelly built up with Kasturi AI that is deemed to feel realastic and human af. It come with variety of wild Moods, witty combacks sass, energy levels, and more...</p>
      <div className="cards-collection">
        <div className="bentocard">
          <h3 className="heading">Not Your <b className="color-grapefruit-pink">average</b> ChatBot</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ipsa a at temporibus dolore obcaecati in iure corporis cumque blanditiis laboriosam accusantium atque minus magnam, soluta quam error aspernatur saepe! Possimus, perspiciatis.</p>
        </div>
        <div className="bentocard">
          <h3 className="heading">Sassy Mod <b className="color-grinding-sky">Queen</b><br/>Not your Assistant</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ipsa a at temporibus dolore obcaecati in iure corporis cumque blanditiis laboriosam accusantium atque minus magnam, soluta quam error aspernatur saepe! Possimus, perspiciatis.</p>
        </div>
        <div className="bentocard">
          <h3 className="heading">Feels <b className="color-grinding-sky">Human</b> af</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ipsa a at temporibus dolore obcaecati in iure corporis cumque blanditiis laboriosam accusantium atque minus magnam, soluta quam error aspernatur saepe! Possimus, perspiciatis.</p>
        </div>
        <div className="bentocard">
          <h3 className="heading">With <b className="color-grapefruit-pink">Wild</b> Moods <br/>Mischives <b className="color-grinding-sky">Unlimited</b> Fun</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ipsa a at temporibus dolore obcaecati in iure corporis cumque blanditiis laboriosam accusantium atque minus magnam, soluta quam error aspernatur saepe! Possimus, perspiciatis.</p>
        </div>

      </div>
    </section>
  )
}

export default Kasturi