import gsap from "gsap";

export function splitLetters(element, classname = "letter", colors=["var(--vintage-grape)", "var(--grinding-sky)" ]) {
    const text = element.innerText;
    let colorIndex = 0;

    element.innerHTML = "";
    [...text].forEach(letter => {
        const span = document.createElement("span");
        span.className = classname;
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre";
        span.textContent = letter
        span.style.color = colors[colorIndex] ?? colors[0]; 
        if (letter == " ") colorIndex += 1;
        element.appendChild(span);
    });

    return element.querySelectorAll(`.${classname}`);
}

export function setRetypeAnimation(element, variants, opts){
    const {
        backspaceSpeed = 40,
        typingSpeed = 55,
        holdMs = 120,
        randomVariant = true
    } = opts;

    let variantIndex = 0;
    let isAnimating = false;

    let letters = splitLetters(element);

    const getNextVariant = () => {
        if (variants.length<=1) return variants[0] ?? element.dataset.original;
        if (randomVariant) {
            let next;
            do {next = Math.floor(Math.random() * variants.length)}
            while (next === variantIndex && variants.length > 1)
            variantIndex = next;
        } else {
            variantIndex = (variantIndex + 1) % variants.length;
        }
        return variants[variantIndex];
    }

    const retypeAnimation = () => {
        if (isAnimating) return;
        isAnimating = true;

        const lettersArray = [...element.querySelectorAll(".letter")]
        const variant = getNextVariant();
        let colorIndex = 0;

        const animation = gsap.timeline({
            onComplete: () => {
                //Rewriting text - left to right
                element.innerHTML = "";
                [...variant.text].forEach( (char, idx) => {
                    const span = document.createElement("span");
                    span.className = "letter";
                    span.style.display = "inline-block";
                    span.style.whiteSpace = "pre";
                    span.textContent = char;
                    if (variant.color) span.style.color = variant.color[colorIndex] ?? variant.color[0];
                    if (char == " ") colorIndex += 1;
                    gsap.set(span, {opacity: 0, y: 12});
                    element.appendChild(span);
                });
                gsap.to(element.querySelectorAll(".letter"), {
                    opacity: 1,
                    y: 0,
                    stagger: typingSpeed / 1000,
                    ease: "power2.out",
                    delay: holdMs / 1000,
                    onComplete: () => {isAnimating = false;}
                })
            }
        });

        //Erasing text - right to left
        animation.to(lettersArray, {
            opacity: 0,
            x: 6,
            y: 12,
            scaleX: 0.6,
            stagger: {
                each: backspaceSpeed / 1000,
                from: "end"
            },
            ease: "power1.in",
            duration: 0.08
        })

    }
    element.addEventListener("mouseenter", retypeAnimation);

    return {retypeAnimation, splitLetters: () => splitLetters(element)};
};