var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    var main = document.querySelector("#main");
    var modal = document.querySelector("#modal");
    main.style.opacity = 1;
    modal.style.top = "18%";
});

// To remove all the negative numbers from the given array

let arr = [1, 2, 1, -2, -3, 4, 5, 1, 2, -10, 6, 52, -20];
let count = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}
console.log(count);

for (let j = 1; j <= count; j++) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
            break;
        }
    }
}
console.log(arr);

let arr2 = arr.filter(num => num >= 0)
console.log(arr2);