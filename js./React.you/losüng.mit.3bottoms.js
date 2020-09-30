import React from 'react';
import './App.css';
​
import 'bootstrap/dist/css/bootstrap.min.css'
import { InputGroup, Button, Alert, FormControl } from 'react-bootstrap'
​
function App() {
  const [eingabe,setzeEingabe] = React.useState('');
  const [ausgabe,setzeAusgabe] = React.useState(false);
  function change(e){ setzeEingabe(e.target.value); }
  async function abschicken(){
    const antwort = await fetch(`/say?message=${eingabe}`);
    const daten   = await antwort.json()
    setzeAusgabe(daten.message);
  }
  async function setzen(){
    await fetch(`/set?message=${eingabe}`);
  }
  async function laden(){
    try {
      const antwort = await fetch(`/get`);
      const daten   = await antwort.json()
      setzeAusgabe(daten.message);
    } catch(e){
      setzeAusgabe(false);
    }
  }
  async function loeschen(){
    await fetch(`/del`);
    setzeAusgabe(false);
  }
  return (
    <div className="App">
      <InputGroup>
        <FormControl name='eingabe' value={eingabe} onChange={change} />
        <InputGroup.Append>
          <Button onClick={abschicken}>Say</Button>
          <Button onClick={setzen}>Set</Button>
          <Button onClick={laden}>Get</Button>
          <Button onClick={loeschen}>Del</Button>
        </InputGroup.Append>
      </InputGroup>
      { ausgabe ? <Alert variant="danger">{ausgabe}</Alert> : null }
    </div>
  );
}
​
export default App;