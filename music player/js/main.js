let container = document.getElementsByClassName("outer")[0];

function Drip(x, w, del) {
    this.x = x;
    this.w = w;
    this.del = del;
    let newEl = document.createElement("span");
    newEl.classList.add("drip");
    container.append(newEl);
    newEl.setAttribute("style", `left: ${this.x}px; 
    width: ${this.w / 1.2}px; height: ${this.w}px;
    animation-delay: ${this.del}s `);
};

function play(el) {
    el.classList.toggle("play-on");
    for (let i = 0; i < 8; i++) {
        let x = Math.floor((Math.random() * 300) + 50);
        let w = Math.floor((Math.random() * 15) + 15);
        let del = Math.random() * 3;
        new Drip(x, w, del);
    };
    document.getElementsByClassName(`blue`)[0]
        .style.transform = "scale(1)";
    setTimeout(function () {
        document.getElementsByClassName(`pink`)[0]
            .style.strokeDashoffset = "800px";
    }, 400);
};