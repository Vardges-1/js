import React, { useState } from 'react';
import './App.css';
​
function App(){
  const [ todo, setzeTodo ] = useState([]);
​
  const loeschen = (nummer)=>
    setzeTodo( todo.filter( (_,n)=> n !== nummer ) )
​
  const hinzufuegen = (eingabe) =>
    setzeTodo([...todo,eingabe])
​
  return (
  <div>
    <h1>ToDo</h1>
    <Eingabe hinzufuegen={hinzufuegen} titel="+"/>
    <TodoListe todo={todo} loeschen={loeschen}/>
  </div>
)};
​
function TodoEintrag({wert,key,loeschen}){ return (
  <div>
    {wert}
    <button onClick={loeschen.bind(null,key)}>x</button>
  </div>
)};
​
function Eingabe({hinzufuegen,titel}){
​
  const [eingabe,eingabeSetzen] = useState('');
​
  const eingabeHaendler = (e) =>
    eingabeSetzen(e.target.value)
​
  const hinzufuegenHaendler = e => {
    hinzufuegen(eingabe);
    eingabeSetzen('');
  }
​
  return ( <>
    <input value={eingabe} onChange={eingabeHaendler}/>
    <button onClick={hinzufuegenHaendler}>{titel}</button>
  </>
)};
​
function TodoListe({todo,loeschen}){
  return todo.map( (wert,nummer)=>
  <TodoEintrag key={nummer}
    wert={wert}
    loeschen={loeschen.bind(null,nummer)}
  />
)};
​
export default App;