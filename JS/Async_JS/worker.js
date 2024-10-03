onmessage = function (data) {
    const ans = data.data.reduce((acc, result) => result + acc, 0)
    postMessage(ans)
}
