gsap.to("#page2 img", {
    width: "100%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -120%",
        scrub: 2,
        pin: true,
    },
});

gsap.to("#page3 h1", {
    transform: "translateX(-70%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,

    }
})