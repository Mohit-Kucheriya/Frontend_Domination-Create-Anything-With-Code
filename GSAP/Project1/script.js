var tl = gsap.timeline();

tl.from("nav h3 ", {
    y: -50,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.25,
});

tl.from(".text h1", {
    y: 300,
    duration: 0.9,
    stagger: 0.3
})

tl.from("img", {
    opacity: 0,
    stagger: 0.25
})