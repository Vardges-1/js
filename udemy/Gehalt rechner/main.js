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




function start() {
    money = +prompt("Dein Budgjet für ein Monat");
    time = prompt("Bitte eingeben die Daten in der Format YYYY-MM-DD", "");

    while (isNaN(money) || money === "" || money == null) {
        money = +prompt("Dein Budgjet für ein Monat");
    }
}
start()

let appData = {
    budget: money,
    expenses: {},
    optionaleExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpense: function () {
        for (let i = 0; i < 1; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
                a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i = i - 1;

            }
        };
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Täglice Budgjet: " + appData.moneyPerDay);

    },
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
    chooseOptExpense: function () {
        for (var i = 0; i < 3; i++) {
            let opt = prompt("Nenujnie rosxodi");
            appData.chooseExpense[i] = opt;
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