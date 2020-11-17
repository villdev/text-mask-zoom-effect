const bcg = document.querySelector(".bcg");

gsap.set(".mask", {
    scale: 40,
    display: "none"
});
gsap.set(".bcg", {
    scale: 1.5
});

bcg.addEventListener("click", start);

function start() {
    gsap.to(".mask", {duration: 1, scale: 1, display: "block", ease: "power1.inOut"});
    gsap.to(".bcg", {duration: 1, scale: 1, ease: "power1.inOut"});
}
