// function func() {

//     var str = "   feeks    for     feeks  ";
//     var st = str.trim().replace(/\s\s+/g, ' ');
//     st = st.split(", ")
//     for (var i = 0; i < st.length; i++) {
//         st[i].charAt(0).capitalize() + st.slice(1);
//     }
//     var endlich = st.join()
//     console.log(endlich)
// }

// func()


function letterCapitalie(str) {
    var endlich = [];
    var st = str.trim().replace(/\s\s+/g, ' ');
    st = st.split(" ");
    for (var i = 0; i < st.length; i++) {
        endlich.push(st[i].charAt(0).toUpperCase() + st[i].slice(i))
    }
    console.log(endlich.join(" "))
}

letterCapitalie(" huhkhkjlk       kuiuiuoiu kjlopo  ")