// Datentypen
//  - Primitve
//  mdn: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
var p1 = true;
var p2 = false;
var p3 = 1;
var p4 = null;
​
// Objekte
//  mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
var obj1 = {}
var obj2 = {name:'anx',age:35}
var arr1 = [1,2,3]
var obj3 = new Pferd(1,2)
​
// Konditionen
​
if ( true ){
  // passiert immer
} else if ( false ) {
  // passiert nie
} else {
  // passiert nimmer
}
​
// Ternary ist eine Abkuerzung fuer if-else
console.log( true  ? 'hallo' : 'welt' ) // => 'hallo'
console.log( false ? 'hallo' : 'welt' ) // => 'welt'
​
// Switch - lasst uns aus mehreren faellen auswaehlen
​
switch('hallo'){
  case 'hallo': console.log('hi auch'); break;
  case 'welt': console.log('wrid nicht passieren'); break;
  default: break;
}
​
if ( 'hallo' === 'hallo' ){} // case 'hallo'
else if ('hallo' === 'welt' ){} // case 'welt'
else {} // default
// Funktionen
function test1(asd=123,...asd){}
const test2 = (asd=123,...asd)=>{} // vergessen ihr this nicht
async function test3(asd=123,...asd){}
const test4 = async (asd=123,...asd)=>{}
const test5 = new Function('console.log(1)');
​
// Arrays
//  - um sachen zu ordnen, als list, z.B. todos
var arr1 = [1,2,3];
var arr2 = new Array(3); // Array is auch eine Klasse
​
// Arrays sind zumeist dafuer da, irgendwie durchzugehen (iterieren)
//  - Also von Element X bis Element Y alle elemente zu bearbeiten
​
for ( let i = 0; i < arr1.length; i++ ){
  console.log('for-int i:',i,'value:',arr1[i]) }
for ( key   in arr1 ){ console.log('for-in key:',key,'value:',arr1[key]) }
for ( value of arr1 ){ console.log('for-of value:', value) }
​
// Array forEach tut das gleiche wie ein for-loop
//   nur mit einem callback
​
arr1.forEach((value,key,array)=>{
  console.log('for-each key:',key,'value:',value)
});
​
// Array map transformiert einen Array
//   - Man bekommt einen neuen array zurueck
//   - Und bestimmt welche werte dieser hat
​
// [1,2,3] => [1,1,1]
var neuerArray = arr1.map( (value,key,array)=>{
  console.log('for-map key:',key,'value:',value)
  return 1;
});
console.log(neuerArray); // [1,1,1]
​
// [1,2,3] => [2,3,4]
var neuerArray = arr1.map( (value,key,array)=>{
  console.log('for-map key:',key,'value:',value)
  return value+1;
});
console.log(neuerArray); // [1,1,1]
​
// Array.filter entfernt elemente aus einem Array
​
// [1,2,3] => []
var neuerArray = arr1.filter( (item) => {
  return false;
})
console.log('filter-all',neuerArray);
​
// [1,2,3] => [1,2,3]
var neuerArray = arr1.filter( (item) => {
  return true;
})
console.log('filter-nothing',neuerArray);
​
// Array.slice - Einen Array aufteilen
//  - Ist ein wenig wie substring
​
console.log(arr1.slice(0,1)); // => [1]
console.log(arr1.slice(0,2)); // => [1,2]
console.log(arr1.slice(1,2)); // => [2,3]
console.log(arr1.slice());    // => [1,2,3]
​
// Array.from() - Versucht aus allem was man
//   reintut, einen Array zu machen
​
console.log(Array.from('anx')) // ['a','n','x']
​
// Array.reduce - Reduziert einen Array uf einen
//   einzelnen Wert.
​
var ergebnis = arr1.reduce( (summe,i)=>{
  return summe + i;
},0)
console.log('array-reduce',ergebnis); // => 6
​
// Klassen (class)
//  - Bauplan fuer Objekte
//  - Koennen von einander erben
​
class Pferd {
  gewicht = 400;
  constructor(argument1,argument2,...restArgumente){
    // Wird aufgerufen wenn man new Pferd(argument1,...) schreibt
  }
  sagWas(){
    console.log('brrrr');
  }
  thisGehtVerloren(){
    console.log(this);
  }
  static lieblingsfutter = ['Hafer,Apfel'];
  static test(){ console.log('Pferde fuer gut befunden') }
}
​
var meinPferd = new Pferd('argument1','argument2');
meinPferd.sagWas();             // => brrrr
console.log(meinPferd.sagWas);  // => function(){...}
console.log(meinPferd.gewicht); // => 400
setTimeout(meinPferd.thisGehtVerloren); // => window
setTimeout(meinPferd.thisGehtVerloren.bind(meinPferd)); // => meinPferd
​
Pferd.test(); // => Pferde fuer gut befunden
console.log(Pferd.lieblingsfutter);
​
class Pony extends Pferd{
  // Eigenschaften ersetzen
  gewicht = 200
  constructor(){
    // Ruft den constructor von Pferd auf:
    super("argument1","argument2")
    // ...
  }
  // Funktionen ueberschreiben
  sagWas(){
    console.log('hiiiiii');
  }
  // Neue funktionen hinzufuegen
  sturSein(){
    console.log('neeeee')
  }
}
​
var meinPony = new Pony();
​
// Promises
//  - Wie eine Funktion aber Asynchron
//  => Anworten spaeter, also nicht sofort
//  mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
​
function sleep(ms=1000){
  return new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
      resolve(ms);
    },ms);
  });
}
​
var p = sleep();
​
p.catch(
  (error)=>{
    console.log('fehler',error);
  }
);
​
p.then(
  (result)=>{
    console.log('geschlafen',result);
  }
);
​
// Promise.all wartet auf den letzten Promise
Promise.all([
  sleep(123),
  sleep(423),
  sleep(534)
])
.then((results)=>{
  console.log('promise-all',results);
  // => [123,423,534]
})
​
// Promise.race ist erfuellt
// wenn der erste Promise resolve aufruft
Promise.race([
  sleep(123),
  sleep(423),
  sleep(534)
])
.then( (result)=>{
  console.log('promise-race',results);
  // => 123
})
​
// Async/await Syntactic-Sugar fuer Promises
//  - Hilft uns besser mit Promises umzugehen
//  - Loops schreiben wird z.b. viel einfacher
//  mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
​
async function awaitTest(){
  let i = 0;
  while ( i++ < 5 ){
    let result = await sleep(100);
    console.log('.',result);
    // => . 100
  }
  try {
    Promise.reject();
  } catch (e) {
    console.log('promise gefangen');
  }
}
awaitTest();
​
// Auch Fat-Arrow Funktionen koennen async sein
const myAsyncFatArrow = async ()=>{ }
​
// fetch(url,{})
//  - Holt daten vom Server
//  - benutzt Promises
// mdn: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
​
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then( response => response.json() ); // .text()
.then( json => console.log(json) );
​
// JSON
//  - JavaScript zu Strings: JSON.stringify()
//  - Strings zu JavaScript: JSON.parse()
// mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
​
var str = JSON.stringify({name:"anx",age:35});
var obj = JSON.parse(str);
​
console.log(str);
console.log(obj);
​
// Hilft auch um Benutzereingaben zu parsen
console.log(JSON.parse("false"))
console.log(JSON.parse("1.1"))
console.log(JSON.parse("1.0e+10"))