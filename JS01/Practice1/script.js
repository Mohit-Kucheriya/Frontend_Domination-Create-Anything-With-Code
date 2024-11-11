// Imp Note: Here the data Array is the single source of truth, if u want to change anything change in the array and then re-print the array (i.e re-render it)

var data = [
    {
        name: "Mohit Kucheriya",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Strangers",
    },
    {
        name: "Harry Potter",
        img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Strangers",
    },
    {
        name: "Ron Wesely",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Strangers",
    },
    {
        name: "Prof. Dumbeldore",
        img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Strangers",
    },
    {
        name: "Snape",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Strangers",
    },

];

function print() {
    var clutter = "";
    data.forEach(function (obj, index) {
        clutter += `<div class="card">
                <img src="${obj.img}"
                    alt="">
                <h1>${obj.name}</h1>
                <h3 id="${obj.status}">${obj.status}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatem.</p>
                <button class="${obj.status === "Strangers" ? "red" : "green"
            }" id="${index}">${obj.status === "Strangers" ? "Add Friend" : "Remove Friend"
            }</button>
            </div>`;
    });
    document.querySelector("#cards").innerHTML = clutter;
}
print();

document.querySelector("#cards").addEventListener("click", function (dets) {
    if (dets.target.tagName === "BUTTON") {
        const index = dets.target.id;
        const currentStatus = data[index].status;

        data[index].status = currentStatus === "Strangers" ? "Friends" : "Strangers";
        print();
    }
});
