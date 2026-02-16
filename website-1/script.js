Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"]
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
        scrub: 1
    },
    y: "-300%",
    ease: "power1.out"
});

let sections = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
    style: 5,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onUpdate: (prog) => {
                    setScroll(index + prog.progress);
                }
            });
        });
    }
});
