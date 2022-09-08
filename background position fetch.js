var i = 0
var wok = "im a service worker that has been active for: "

setTimeout(function(){
    i++
    postMessage(wok + i + " seconds")
}, 1000 * 5)