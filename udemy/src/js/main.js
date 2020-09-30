'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




let money, time;





startBtn.addEventListener("click", function () {
    time = prompt("Bitte eingeben die Daten in der Format YYYY-MM-DD", "");
    money = +prompt("Dein Budgjet für ein Monat");

    while (isNaN(money) || money === "" || money == null) {
        money = +prompt("Dein Budgjet für ein Monat");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
})


expensesBtn.addEventListener("click", function () {

    let sum = 0;
    // grumenq expensesItem vor ichqan avelana et elementic etqan hashvark ani yete gren i > 2 heto -
    //  stexcvi miqani hatel expensesItem chi hashi
    for (let i = 0; i < expensesItem.length; i++) {

        let a = expensesItem[i].value;
        // senc anumenq [++i] vor mianqamic expensesItem heajordin ta gin@ arachin@ anun@ heto gin@
        let b = expensesItem[++i].value;


        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            // expenses mech grumen (a) u = b te ichqan arji
            appData.expenses[a] = b;
            // grumenq sum += vor amen anqam gumarvi taza tiv@ hini het u +b vor tiv vorpes grvi number
            // vorovhetev inch stanumenq hachaxortic galisa vorpes string 
            sum += +b;

        } else {
            i = i - 1;

        }
    };

    expensesValue.textContent = sum;

})


optionalExpensesBtn.addEventListener("click", function () {
    for (var i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionaleExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionaleExpenses[i] + ' ';
    }
})

countBtn.addEventListener("click", function () {

    // etim mi govorim esli nash budet izvesten i bil najat nachat raschyot menq anumenq es if anfrage
    if(appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Minimal";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Normala";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Kayfa";
        } else {
            levelValue.textContent = "Irgendwa ist falsch";
        }
    }else{
        dayBudgetValue.textContent = "Irgendwas ist falsch gegangen";
    }

})

incomeItem.addEventListener("input", function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
})

checkSavings.addEventListener("click", function(){
    if(appData.savings == true){
        appData.savings = false
    }else{
        appData.savings = true;
    }
})


sumValue.addEventListener("input", function(){
    if(appData.savings == true){
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100*percent

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
})


percentValue.addEventListener("input", function(){
    if(appData.savings == true){
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100*percent

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
})


let appData = {
    budget: money,
    expenses: {},
    optionaleExpenses: {},
    income: [],
    timeData: time,
    savings: false,

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Minimal")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Nomrala")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Kayfa")
        } else {
            console.log("Irgendwas ist falsch")
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {

            let money = +prompt("Kakaya suma Nokoplenii"),
                procent = prompt("Pod kakoy procent")

            appData.monthIcom = money / 100 / 12 * procent
            alert("Doxod v mesac s vashevo depozida" + appData.monthIcom)



        }
    },
    chooseIncome: function () {
        let items = prompt("Chto prinoset nam doxod")
        appData.income = items.split(", ");
        appData.income.push(prompt("Mojet chto to ti zabil"))
        appData.income.sort()
    }

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}