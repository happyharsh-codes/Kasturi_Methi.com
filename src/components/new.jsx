/**
 * textAnimations.js
 * Retype / backspace / wobble animations for Kasturi_Methi.com
 * Requires: gsap
 */

import gsap from "gsap";

// ─── SPLIT TEXT INTO LETTER SPANS ────────────────────────────────────────────
// Call once on mount. Returns the wrapper element.
export function splitLetters(element, className = "letter") {
  const text = element.innerText;
  element.innerHTML = "";
  [...text].forEach((char) => {
    const span = document.createElement("span");
    span.className = className;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre"; // preserve spaces
    span.textContent = char;
    element.appendChild(span);
  });
  return element.querySelectorAll(`.${className}`);
}

// ─── RETYPE / BACKSPACE ON HOVER ────────────────────────────────────────────
/**
 * @param {HTMLElement} element      - The heading element
 * @param {Array}       variants     - [{ text, color? }] list of alternate texts
 *                                     First entry is the original.
 * @param {Object}      opts
 *   backspaceSpeed   ms per letter deletion  (default 40)
 *   typeSpeed        ms per letter insertion  (default 55)
 *   holdMs           pause between delete and retype (default 120)
 *   randomVariant    pick a random variant each time (default true)
 */
export function setupRetypeAnimation(element, variants = [], opts = {}) {
  const {
    backspaceSpeed = 40,
    typeSpeed = 55,
    holdMs = 120,
    randomVariant = true,
  } = opts;

  let variantIndex = 0;
  let isAnimating = false;

  // Initial split
  let letters = splitLetters(element);

  const getNextVariant = () => {
    if (variants.length <= 1) return variants[0] ?? { text: element.dataset.original };
    if (randomVariant) {
      let next;
      do { next = Math.floor(Math.random() * variants.length); }
      while (next === variantIndex && variants.length > 1);
      variantIndex = next;
    } else {
      variantIndex = (variantIndex + 1) % variants.length;
    }
    return variants[variantIndex];
  };

  const retype = () => {
    if (isAnimating) return;
    isAnimating = true;

    const lettersArr = [...element.querySelectorAll(".letter")];
    const variant = getNextVariant();

    // 1. Backspace out — right to left
    const tl = gsap.timeline({
      onComplete: () => {
        // 2. Swap text content
        element.innerHTML = "";
        [...variant.text].forEach((char) => {
          const span = document.createElement("span");
          span.className = "letter";
          span.style.display = "inline-block";
          span.style.whiteSpace = "pre";
          if (variant.color) span.style.color = variant.color;
          span.textContent = char;
          gsap.set(span, { opacity: 0, y: 12 });
          element.appendChild(span);
        });

        // 3. Type in — left to right
        gsap.to(element.querySelectorAll(".letter"), {
          opacity: 1,
          y: 0,
          stagger: typeSpeed / 1000,
          ease: "power2.out",
          delay: holdMs / 1000,
          onComplete: () => { isAnimating = false; },
        });
      },
    });

    tl.to(lettersArr.reverse(), {
      opacity: 0,
      y: -8,
      scaleX: 0.6,
      stagger: backspaceSpeed / 1000,
      ease: "power1.in",
      duration: 0.07,
    });
  };

  element.addEventListener("mouseenter", retype);

  // Expose manual trigger
  return { retype, splitLetters: () => splitLetters(element) };
}

// ─── FOOTER LINK — BACKSPACE → PLAIN FONT ────────────────────────────────────
/**
 * On hover: backspace out the handwritten text,
 * type back in plain monospace with optional new label.
 */
export function setupLinkRetype(linkElement, plainLabel = null) {
  const original = linkElement.innerText.trim();
  const target = plainLabel ?? original;
  let isAnimating = false;

  splitLetters(linkElement);

  const animate = () => {
    if (isAnimating) return;
    isAnimating = true;

    const letters = [...linkElement.querySelectorAll(".letter")];

    gsap.to(letters.reverse(), {
      opacity: 0,
      x: 6,
      stagger: 0.03,
      ease: "power1.in",
      duration: 0.06,
      onComplete: () => {
        linkElement.innerHTML = "";
        linkElement.style.fontFamily = "'General', monospace";

        [...target].forEach((char) => {
          const span = document.createElement("span");
          span.className = "letter";
          span.style.display = "inline-block";
          span.style.whiteSpace = "pre";
          span.style.fontFamily = "inherit";
          span.textContent = char;
          gsap.set(span, { opacity: 0, x: -4 });
          linkElement.appendChild(span);
        });

        gsap.to(linkElement.querySelectorAll(".letter"), {
          opacity: 1,
          x: 0,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.05,
          onComplete: () => { isAnimating = false; },
        });
      },
    });
  };

  const reset = () => {
    linkElement.style.fontFamily = "";
    linkElement.innerHTML = "";
    [...original].forEach((char) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre";
      span.textContent = char;
      linkElement.appendChild(span);
    });
    isAnimating = false;
  };

  linkElement.addEventListener("mouseenter", animate);
  linkElement.addEventListener("mouseleave", reset);
}

// ─── INFINITE WOBBLE (handwritten text) ──────────────────────────────────────
/**
 * Applies a per-letter staggered infinite wobble to a handwritten element.
 * Each letter rotates & translates independently for organic feel.
 */
export function applyWobble(element, opts = {}) {
  const {
    rotateAmt = 2,        // max rotation degrees
    yAmt = 3,             // max y drift px
    duration = 1.8,       // seconds per full cycle
    stagger = 0.12,       // stagger between letters
    ease = "sine.inOut",
  } = opts;

  const letters = splitLetters(element);

  letters.forEach((letter, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    const delay = i * stagger + Math.random() * 0.2;

    gsap.to(letter, {
      rotate: rotateAmt * dir,
      y: yAmt * dir,
      skewX: 1 * dir,
      duration: duration + Math.random() * 0.4,
      ease,
      repeat: -1,
      yoyo: true,
      delay,
    });
  });
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function setupScrollReveal(selector = ".reveal") {
  document.querySelectorAll(selector).forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}