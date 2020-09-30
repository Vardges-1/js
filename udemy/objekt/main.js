let options = {
    width: 1024,
    height: 1024,
    name: "test",
}

console.log(options.name);

options.bool = false;
options.colors = {
    border: "black",
    bg: "red",
};

delete options.bool;

console.log(options);


// etot key oznachayet kajdi objekt v option
for (let key in options) {
    console.log("Svoystva " + key + " imeet znacheniya " + options[key]);
}

// console.log(options);

// objekt keys znachit vsye keysi objekta i options etot tot objekt u katorovo mi xotim proverit length
console.log(Object.keys(options).length);