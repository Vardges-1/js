// let money, time;

// function start() {
//     money = +prompt("Vam budjet na mesec?", "");
//     time = prompt("Vvedite datu v formate YYYY-MM-DD", "");

//     while (isNaN(money) || money == "" || money == null) {
//         money = prompt("Vash Budjet?", "");
//     }
// }

// start();

// let appDate = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     icome: [],
//     timeData: time,
//     savings: true,
//     chooseExpenses: function () {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Vvedite obezatelnie statyu rasxoda", ""),
//                 b = prompt("vo skolko oboydyotca?", "");

//             if ((typeof (a)) != null && (typeof (b)) != null && a != "" && a.lenght < 50) {
//                 console.log("Vsyo rsvno");
//                 appDate.expenses[a] = b;

//             } else {
//                 i = i - 1;
//             }
//         }
//     }
// };