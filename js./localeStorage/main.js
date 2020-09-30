// localStorage.setItem("data", 5);
// console.log(localStorage.getItem("data"));

// const a = [3, 4, 5];
// // pri soxraneniye ya transformirovayu array to string 
// localStorage.setItem("a", JSON.stringify(a));
// let b = localStorage.getItem('a');
// // i posle izvlecheniya i locaStorage s pomashyu getItem ja delayu ego objekt
// b = JSON.parse(b);
// console.log(b);

// console.log(typeof b)

/////-------

window.addEventListener("storage", function (e){
    console.log("change")
    this.document.querySelector(".out").textContent = localStorage.getItem("b1")
});
const c = {
    hello: 5,
    k: 2,
    4: "hi"
};
localStorage.setItem("c", JSON.stringify(c));
let d = localStorage.getItem('c');
d = JSON.parse(d);
console.log(d);

console.log(typeof d);