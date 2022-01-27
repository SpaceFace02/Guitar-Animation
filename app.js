let tl = gsap.timeline({
  scrollTrigger: {
    // Runs as soon as the user scrolls to the frontPage
    trigger: ".front-page",
    start: "0%",
    // end: "bottom",
    end: "150%",
    // markers: true,
    scrub: true,
    pin: true,
  },
});

tl.fromTo(
  ".front-page",
  { clipPath: "circle(5%)" },
  { duration: 3, clipPath: "circle(75%)" }
);

tl.fromTo(
  ".music-note",
  { scale: 0.5 },
  { duration: 1, scale: 0, opacity: 0 },
  "-=3"
);

tl.fromTo(".intro-text", { opacity: 0 }, { duration: 1, opacity: 1 }, "-=2");
