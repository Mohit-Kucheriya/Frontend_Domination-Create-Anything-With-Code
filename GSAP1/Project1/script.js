var tl = gsap.timeline()
tl.from("#left", {
    opacity: 0,
    width: 0,
    duration: 1,
    ease: "expo.inOut",
})
    .from("#right", {
        delay: -1,
        opacity: 0,
        width: 0,
        duration: 1
    })
    .from(".left-t", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    })

    .from("#right img", {
        opacity: 0,
        y: -15
    })

