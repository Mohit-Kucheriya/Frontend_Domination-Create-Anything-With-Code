/* For 1 element only.

let h1Text = document.querySelector("#h1first").textContent
console.log(h1Text);

let splittedText = h1Text.split("")
console.log(splittedText);

let clutter = ""
splittedText.forEach(function (char) {
    clutter += `<span>${char}</span>`
})
document.querySelector("#h1first").innerHTML = clutter


gsap.to("#page2 h1 span", {
    color: "#f7f7ee",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 50",
        end: "top 10%",
        scrub: 1,
    }
})

*/

function textSplittingColor() {
    let allH1 = document.querySelectorAll("#page2 h1");

    allH1.forEach(function (elem) {
        let h1TextContent = elem.textContent
        console.log(h1TextContent);

        let splittedText = h1TextContent.split("");
        console.log(splittedText);

        let clutter = ""
        splittedText.forEach(function (char) {
            clutter += `<span>${char}</span>`

        })
        elem.innerHTML = clutter
        console.log(elem);
    })
}

function gsapAnimation() {
    gsap.to("#page2 h1 span", {
        color: "#f7f7ee",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page2 h1",
            scroller: "body",
            start: "top 50",
            end: "top -20%",
            scrub: 2,
        }
    })

}

textSplittingColor()
gsapAnimation()