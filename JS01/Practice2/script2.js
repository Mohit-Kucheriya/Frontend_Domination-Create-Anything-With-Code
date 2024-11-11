var data = [
    {
        dp: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img: "https://images.unsplash.com/photo-1515161318750-781d6122e367?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsJTIwcG90cmFyb3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img: "https://images.unsplash.com/photo-1583900985737-6d0495555783?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

var clutter = "";
data.forEach(function (elem, idx) {
    clutter += ` <div class="story">
                    <img id="${idx}" src="${elem.dp}"
                        alt="">
                </div>`;
});
document.querySelector("#stories").innerHTML = clutter;

var grow = 0
document.querySelector("#stories").addEventListener("click", function (dets) {
    document.querySelector("#fullScreen").style.display = "block";
    document.querySelector("#fullScreen").style.backgroundImage = `url(${data[dets.target.id].img
        })`;


    setTimeout(() => {
        document.querySelector("#fullScreen").style.display = "none";

    }, 2500);
    if (grow < 100) {
        setInterval(() => {
            document.querySelector("#growth").style.width = `${grow}%`
            grow++

        }, 25);
    } else {
        grow = 0
    }

});
