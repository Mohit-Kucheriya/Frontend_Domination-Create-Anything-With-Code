
// callback
function getData(url, callback) {
    fetch(url)
        .then((raw) => raw.json())
        .then((data) => {
            callback(data);
        });
}


getData("https://randomuser.me/api/", function (data) {
    console.log(data);
    let { name, email } = data.results[0];
    console.log(`Heelo ${name.title} ${name.first} ${name.last}`);
    console.log(`Here is your email: ${email}`);
});

// Callback vs Promises vs Async/Await
function dataFetcher(url1, callback1) {
    fetch(url1)
        .then((res) => res.json())
        .then((response) => {
            callback1(response);
        });
}

dataFetcher("https://catfact.ninja/fact", function (response) {
    console.log(response.fact);
});


function dataFetcher1(url) {
    const promise1 = new Promise((resolve, reject) => {
        fetch(url)
            .then(raw => raw.json())
            .then(result => {
                resolve(result)
            })
    })
    return promise1
}

dataFetcher1("https://catfact.ninja/fact")
    .then(function (result) {
        console.log(`Using Promises: ${result.fact}`);
        console.log(`${result.length}`);
    })


async function dataFetcher2(url) {
    let response = await fetch(url)
    let result = response.json()
    return result
}

async function getDataFetcher2() {
    let data = await dataFetcher2("https://catfact.ninja/fact")
    console.log(data.fact);

}
getDataFetcher2()

// Generators
// Aap program k execution ko pause kr skte ho and bol sakte ho ki ab agla step karo.
function* printNums() {
    console.log("Started");
    yield 1;
    console.log("After 1");
    yield 2;
    console.log("After 2");
    yield 3
}

const answer = printNums()
console.log(answer);
console.log(answer.next().value);
console.log(answer.next().value);
console.log(answer.next().done);
console.log(answer.next().done);

function* getAllNums() {
    for (let i = 1; i < 11; i++) {
        yield i;
    }
}

const nums1 = getAllNums();
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)
console.log(nums1.next().value)


// Web Workers

let nums = Array.from({ length: 50 }, (_, idx) => idx + 1)
const worker = new Worker("worker.js")

worker.postMessage(nums)

worker.onmessage = function (data) {
    console.log(data.data)
}