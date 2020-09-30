var count = 0;
document.querySelector(".meko").onclick = ()=> {
    count++
    localStorage.setItem("b1", count)
}