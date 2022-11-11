
let navP = document.querySelector("#topBox>div:nth-child(1)>img")
navP.addEventListener("click", () => {
    window.location.href = "index.html"
})


let support = document.querySelector(".navRight>p:nth-child(2)")
support.addEventListener("click", () => {
    window.location.href = "support.html"
})


let trips = document.querySelector(".navRight>p:nth-child(3)")
trips.addEventListener("click", () => {
    window.location.href = "trips.html"
})


let sign = document.querySelector(".navRight>p:nth-child(4)")
sign.addEventListener("click", () => {
    window.location.href = "sign.html"
})



let stays = document.querySelector(".check>p:nth-child(1)")
stays.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    document.querySelector(".stay").innerHTML = ""
    document.querySelector(".ticket").innerHTML = ""
    document.querySelector(".tick").innerHTML = ""
    document.querySelector(".left").innerHTML = ""
    document.querySelector(".right").innerHTML = ""
    document.querySelector(".flightBottom").innerHTML = ""
    document.querySelector(".topcars").innerHTML = ""
    document.querySelector(".bottomcars").innerHTML = ""
    document.querySelector(".childPackages1").innerHTML = ""
    document.querySelector(".childPackages2").innerHTML = ""
    document.querySelector(".p").innerText = ""
    document.querySelector(".things").innerHTML = ""



    let div1 = document.createElement("div")
    div1.innerText = "Going to"
    let div2 = document.createElement("div")
    div2.innerText = "check-in"
    let div3 = document.createElement("div")
    div3.innerText = "check-out"
    let div4 = document.createElement("div")
    div4.innerText = "Travellers"
    let p1 = document.createElement("p")
    p1.innerText = "Add a flight"
    let p2 = document.createElement("p")
    p2.innerText = "Add a car"

    let tick = document.querySelector(".tick")
    tick.append(p1, p2)
    let parent = document.querySelector(".stays")
    parent.append(div1, div2, div3, div4)
})



let flights = document.querySelector(".check>p:nth-child(2)")
flights.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    document.querySelector(".stay").innerHTML = ""
    document.querySelector(".ticket").innerHTML = ""
    document.querySelector(".tick").innerHTML = ""
    document.querySelector(".left").innerHTML = ""
    document.querySelector(".right").innerHTML = ""
    document.querySelector(".flightBottom").innerHTML = ""
    document.querySelector(".topcars").innerHTML = ""
    document.querySelector(".bottomcars").innerHTML = ""
    document.querySelector(".childPackages1").innerHTML = ""
    document.querySelector(".childPackages2").innerHTML = ""
    document.querySelector(".p").innerText = ""
    document.querySelector(".things").innerHTML = ""


    let p1 = document.createElement("p")
    p1.innerText = "Return"
    let p2 = document.createElement("p")
    p2.innerText = "One-Way"
    let p3 = document.createElement("p")
    p3.innerText = "Multi-city"
    let p4 = document.createElement("p")
    p4.innerText = "traveller"
    let p5 = document.createElement("p")
    p5.innerText = "Economy"
    let d1 = document.createElement("div")
    d1.innerText = "Leaving from"
    let d2 = document.createElement("div")
    d2.innerText = "Going to"
    let d3 = document.createElement("div")
    d3.innerText = "Departin"
    let d4 = document.createElement("div")
    d4.innerText = "Returning"

    let left = document.querySelector(".left")
    left.append(p1, p2, p3)
    let right = document.querySelector(".right")
    right.append(p4, p5)
    let flightBottom = document.querySelector(".flightBottom")
    flightBottom.append(d1, d2, d3, d4)
})

let cars = document.querySelector(".check>p:nth-child(3)")
cars.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    document.querySelector(".stay").innerHTML = ""
    document.querySelector(".ticket").innerHTML = ""
    document.querySelector(".tick").innerHTML = ""
    document.querySelector(".left").innerHTML = ""
    document.querySelector(".right").innerHTML = ""
    document.querySelector(".flightBottom").innerHTML = ""
    document.querySelector(".topcars").innerHTML = ""
    document.querySelector(".bottomcars").innerHTML = ""
    document.querySelector(".childPackages1").innerHTML = ""
    document.querySelector(".childPackages2").innerHTML = ""
    document.querySelector(".p").innerText = ""
    document.querySelector(".things").innerHTML = ""

    let p1 = document.createElement("p")
    p1.innerText = "Car hire"
    let p2 = document.createElement("p")
    p2.innerText = "Airport transport"

    let d1 = document.createElement("div")
    d1.innerText = "Pick-up"
    let d2 = document.createElement("div")
    d2.innerText = "Same as pick-up"
    let d3 = document.createElement("div")
    d3.innerText = "Pick-up date"
    let d4 = document.createElement("div")
    d4.innerText = "Drop-off date"
    let d5 = document.createElement("div")
    d5.innerText = "Pick-up-time"
    let d6 = document.createElement("div")
    d6.innerText = "Drop-off time"

    let top = document.querySelector(".topcars")
    top.append(p1, p2)

    let div = document.querySelector(".bottomcars")
    div.append(d1, d2, d3, d4, d5, d6)

})









let packages = document.querySelector(".check>p:nth-child(4)")
packages.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    document.querySelector(".stay").innerHTML = ""
    document.querySelector(".ticket").innerHTML = ""
    document.querySelector(".tick").innerHTML = ""
    document.querySelector(".left").innerHTML = ""
    document.querySelector(".right").innerHTML = ""
    document.querySelector(".flightBottom").innerHTML = ""
    document.querySelector(".topcars").innerHTML = ""
    document.querySelector(".bottomcars").innerHTML = ""
    document.querySelector(".childPackages1").innerHTML = ""
    document.querySelector(".childPackages2").innerHTML = ""
    document.querySelector(".p").innerText = ""
    document.querySelector(".things").innerHTML = ""

    let p1 = document.createElement('p')
    p1.innerText = "1 room,"
    let p2 = document.createElement("p")
    p2.innerText = "travellers"
    let d1 = document.createElement("div")
    d1.innerText = "Leaving from"
    let d2 = document.createElement("div")
    d2.innerText = "Going to"
    let d3 = document.createElement("div")
    d3.innerText = "Departing"
    let d4 = document.createElement("div")
    d4.innerText = "Returning"
    let p3 = document.querySelector(".p")
    p3.innerText = "I only need accommondation for part of my trip"

    let pac1 = document.querySelector(".childPackages1")
    pac1.append(p1, p2)
    let pac2 = document.querySelector(".childPackages2")
    pac2.append(d1, d2, d3, d4)

})

let thing = document.querySelector(".check>p:nth-child(5)")
thing.addEventListener("click", () => {
    document.querySelector(".stays").innerHTML = ""
    document.querySelector(".stay").innerHTML = ""
    document.querySelector(".ticket").innerHTML = ""
    document.querySelector(".tick").innerHTML = ""
    document.querySelector(".left").innerHTML = ""
    document.querySelector(".right").innerHTML = ""
    document.querySelector(".flightBottom").innerHTML = ""
    document.querySelector(".topcars").innerHTML = ""
    document.querySelector(".bottomcars").innerHTML = ""
    document.querySelector(".childPackages1").innerHTML = ""
    document.querySelector(".childPackages2").innerHTML = ""
    document.querySelector(".p").innerText = ""
    document.querySelector(".things").innerHTML = ""

    let d1 = document.createElement("div")
    d1.innerText = "Things to do in"
    let d2 = document.createElement("div")
    d2.innerText = "From"
    let d3 = document.createElement("div")
    d3.innerText = "To"

    let thing = document.querySelector(".things")
    thing.append(d1, d2, d3)



})




