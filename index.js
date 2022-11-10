
let navP = document.querySelector("#topBox>div:nth-child(1)>img")
navP.addEventListener("click", () => {
    window.location.href = "index.html"
})


let support = document.querySelector(".navRight>p:nth-child(4)")
support.addEventListener("click", () => {
    window.location.href = "support.html"
})


let trips = document.querySelector(".navRight>p:nth-child(5)")
trips.addEventListener("click", () => {
    window.location.href = "trips.html"
})


let sign = document.querySelector(".navRight>p:nth-child(6)")
sign.addEventListener("click", () => {
    window.location.href = "sign.html"
})



let stays = document.querySelector(".check>p:nth-child(1)")
stays.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    let div1 = document.createElement("div")
    div1.innerText = "Going to"
    let div2 = document.createElement("div")
    div2.innerText = "check-in"
    let div3 = document.createElement("div")
    div3.innerText = "check-out"
    let div4 = document.createElement("div")
    div4.innerText = "Travellers"

    let parent = document.querySelector(".stays")

    parent.append(div1, div2, div3, div4)
})



let flights = document.querySelector(".check>p:nth-child(2)")
flights.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    let 


})

let cars = document.querySelector(".check>p:nth-child(3)")
cars.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    let div1 = document.createElement("div")
    div1.innerText = "Going to"
    let div2 = document.createElement("div")
    div2.innerText = "check-in"
    let div3 = document.createElement("div")
    div3.innerText = "check-out"
    let div4 = document.createElement("div")
    div4.innerText = "Travellers"

    let parent = document.querySelector(".stays")

    parent.append(div1, div2, div3, div4)
})

let packages = document.querySelector(".check>p:nth-child(4)")
packages.addEventListener("click", () => {

})

let thing = document.querySelector(".check>p:nth-child(5)")
thing.addEventListener("click", () => {

})




