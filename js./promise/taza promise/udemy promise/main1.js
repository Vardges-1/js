
var drink  = 1;

function shoot(arrow, headsot, fall) {
    console.log();
    setTimeout(() => {
        Math.random() > .5 ? headsot({}) : fall("Vi promoxnulis");
    }, 1000);
}

function win() {
    console.log("Vi pobedili");
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log("Vam kupili pivo")
}

function giveMoney() {
    console.log("Vam zaplatili")
}

function loose() {
    console.log("Vi proigrali")
}

shoot({},
    function (headsot) {
        console.log("kpaq");
        win(headsot, buyBeer, giveMoney);
    },
    function (fall) {
        console.error(fall)
        loose()
    }
)