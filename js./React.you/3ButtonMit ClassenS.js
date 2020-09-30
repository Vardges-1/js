import React from 'react';
import './App.css';
​
import 'bootstrap/dist/css/bootstrap.min.css'
import { InputGroup, Button, Alert, FormControl } from 'react-bootstrap'
​
class App extends React.Component {
​
  constructor(props){
    super(props);
    this.state = {
      eingabe:'',
      ausgabe:false
    }
  }
​
  change = e => {
    this.setState({
      eingabe: e.target.value
    });
  }
​
  abschicken = async ()=> {
    const antwort = await fetch(`/say?message=${this.state.eingabe}`);
    const daten   = await antwort.json()
    this.setState({ausgabe:daten.message});
  }
​
  setzen = async ()=> {
    await fetch(`/set?message=${this.state.eingabe}`);
  }
​
  laden = async ()=> {
    try {
      const antwort = await fetch(`/get`);
      const daten   = await antwort.json()
      this.setState({ausgabe:daten.message});
    } catch(e){
      this.setState({ausgabe:false});
    }
  }
​
  loeschen = async ()=> {
    await fetch(`/del`);
    this.setState({ausgabe:false});
  }
​
  render(){
    console.log('render:aufruf',this.state);
    const { eingabe, ausgabe } = this.state;
    const { abschicken, setzen, laden, loeschen, change } = this;
    return ( <div className="App">
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
    </div> );
  }
}
​
export default App;