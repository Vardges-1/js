var drink = 1;

function shoot(arrow) {
    console.log();
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            Math.random() > .5 ? resolve({}) : reject("Vi promoxnulis");
        }, 1000);
    });

    return promise

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

shoot({})
    .then(mark => console.log("Vi popali v cel"))
    .then(win)
    .catch(loose)