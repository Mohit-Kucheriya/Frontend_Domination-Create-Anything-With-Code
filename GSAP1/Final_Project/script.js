function homeAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom -250%",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });

  tl.from("#center-img", {
    x: 300,
    ease: Power1,
  })

    .to(
      "#circle #bottom img",
      {
        scale: 1,
        rotate: "-180deg",
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "homeAnimation"
    )

    .to(
      "#circle #top img",
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "homeAnimation"
    )

    .to(
      "#center-img .c-image img",
      {
        scale: 0,
        duration: 1,
        ease: Power1,
      },
      "homeAnimation"
    )

    .to(
      "#center-img h5",
      {
        opacity: 0,
        ease: Power1,
        stagger: 0.1,
      },
      "homeAnimation"
    )

    .to(
      "#circle",
      {
        scale: 0.6,
        ease: Power1,
      },
      "homeAnimation"
    )
    .to(
      "#bottom-nav>h1",
      {
        y: 350,
        ease: Power1,
      },
      "homeAnimation"
    )

    .to(
      "#pink-circle",
      {
        top: "50%",
        scale: 1.5,
        ease: Power1,
      },
      "homeAnimation"
    )

    .to(
      "#pink-circle",
      {
        opacity: 0,
        ease: Power1,
      },
      "homeAnimation1"
    )

    .to(
      "#smcircle",
      {
        scale: 0,
        ease: Power1,
      },
      "homeAnimation1"
    )

    .to(
      "#circle",
      {
        scale: 0,
        ease: Power1,
      },
      "homeAnimation1"
    )

    .to(
      "#overlay>h1#pink-flare",
      {
        bottom: "0%",
        rotate: 0,
        ease: Power1,
      },
      "homeAnimation1"
    )

    .to(
      "#pink-div",
      {
        top: "0%",
        ease: Power1,
      },
      "homeAnimation1"
    )

    .to("#pink-div", {
      top: "-70%",
      ease: Power1,
      duration: 2,
    });
}
homeAnimation();

function secondAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second",
      start: "top top",
      end: "bottom -150%",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });

  tl2
    .to(".circle", {
      top: "50%",
      scale: 1.3,
      stagger: 0.1,
      ease: Power1,
    })

    .to(".circle", {
      left: "50%",
      ease: Power1,
    })

    .to("#pink", {
      scale: 10,
      ease: Power1,
    })

    .to("#pink", {
      background: "linear-gradient(to right, #d5a7b4,#b4aad5)",
      ease: Power1,
    })

    .to("#second-top", {
      borderBottom: "none",
      ease: Power1,
    })

    .to("#second-top h1", {
      left: "-160%",
      duration: 5,
      ease: Power1,
    });
}
secondAnimation();
