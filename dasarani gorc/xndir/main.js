/*
    Trinkgeld Rechner
​
    Die Gast Klasse stell einen Kunden in einem Restaurant dar,
    dessen Trinkgelder nach bestimmten, individuellen Regeln berechnet werden sollen.
​
    Hierzu werden Name und eine Liste der Rechungen erfasst,
    sowie eine Callback-Funktion mitgegeben, welche die individuelle Regel beschreibt.
​
    Ausserdem soll die berechnung der Durchschnittswertes (calcAverage),
    sowie ein Vergleich (compare) mit anderen Gaesten moeglich sein. 
​
*/
​
class Gast {
    ​
    constructor(options = {}) {
        // Der Konstruktor bekommt einen Parameter 'options',
        // dieser ist standardmaessig auf eine leeres Objekt eingestellt.
        ​
        // Im folgenden Schritt wird mittels Object.assign
        // zuerst das Objekt mit Standardwerten zugewiesen,
        // damit keine Probleme auftreten sollten nicht alle Felder ausfuellt werden.
        // danach werden die daten aus dem 'options' Objekt zugewiesen.    
        ​
        Object.assign(
            this, { // Standardwerte
                fullName: 'Unbekannt',
                bills: [],
                tips: [],
                finalValues: []
            },
            options
        )
    }​
    percentages = (bill) => {
        // Diese Funktion liefert den Prozentsatz der fuer das Trinkgeld benutzt
        // werden soll, es ist vorgesehen das diese Funktion im Konstruktor ersetzt
        // werden kann.  
        if (bill < 50) {
            return .2;
        } else if (bill >= 50 && bill <= 200) {
            return .15;
        } else {
            return .1;
        }
    }​
    calcTips = () => {
        // Berechnung der Trinkgelder
        ​
        // Hier werden die Ausgabe-Arrays initialisiert
        this.tips = []; // Trinkgelder
        this.finalValues = []; // Endbetraege
        ​
        for (var i = 0; i < this.bills.length; i++) {

            var bill = this.bills[i]; // Aktueller Rechungsbetrag
            var percentage = this.percentages(bill); // Die percentages-Funktion ermittelt den
            // Satz abhaengig vom Rechungsbetrag
            let tip = bill * percentage // Nun rechnen wir das Trinkgeld aus (Prozentrechung:)
            ​
            this.tips[i] = tip; // Letzlich speichern wir das Trinkgeld im Ausgabe-Array
            this.finalValues[i] = bill + tip; // Die Endsumme entspricht dem Rechungsbetrag + Trinkgeld
        }​
        this.calcAverage() // Nun koennen wir den Durchschnittswert ausrechnen
    }​
    calcAverage = () => {
        // Berechung des Durchschnittswertes
        var sum = 0;

        for (var i = 0; i < this.tips.length; i++) {
            sum = sum + this.tips[i];
        }​
        this.average = sum / this.tips.length;
    }​
    compare = (other) => {
        // Vergleich mit einem anderen Gast, einfache Ausgabe
        // toFixed sorgt fuer gut lesbare Zahlen
        // beachte das template-Strings benutzt werden
       
         var pox = (this.average > other.average) ? `${this.fullName}'s family pays higher tips, with an average of ${this.average.toFixed(2)}$`: (other.average > this.average) ? `${other.fullName}'s family pays higher tips, with an average of ${other.average.toFixed(2)}$`
         console.log(pox);
        // if (this.average > other.average) {
        //     console.log(`${this.fullName}'s family pays higher tips, with an average of ${this.average.toFixed(2)}$`);
        // } else if (other.average > this.average) {
        //     console.log(`${other.fullName}'s family pays higher tips, with an average of ${other.average.toFixed(2)}$`);
        // }
    }​
    static compare(one, two) {
        one.compare(two)
    }
}​
var john = new Gast({
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42] // Rechungsbetraege
})​
var mark = new Gast({
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    percentages: function (bill) {
        // Individuelle berechnung des Prozentsatzes
        if (bill < 100) {
            return .2;
        } else if (bill >= 100 && bill <= 300) {
            return .10;
        } else {
            return .25;
        }
    }
})​
var anx = new Gast({
    fullName: 'anx hakt0r',
    bills: [1023, 230, 660, 280],
    percentages: function (bill) {
        if (bill < 100) {
            return .2;
        } else if (bill >= 100 && bill <= 500) {
            return .10;
        } else {
            return .5;
        }
    }
})​​
john.calcTips();
mark.calcTips();
anx.calcTips();​
john.compare(mark);
mark.compare(anx);
john.compare(anx)​
Gast.compare(john, anx)