import React, { useState } from "react";
import {Button, Alert} from 'react-bootstrap';
import "./App.css";

function App() {
  const [zahl, zahlSetzen] = useState(0);
  const clickPlus = e => zahlSetzen(zahl + 1);
  const clickMinus = e => zahlSetzen(zahl - 1);

  let meko;

  // if (zahl % 2 == 0) {
  //   meko = <h2 className="mek">{zahl}</h2>
  // } else if (zahl % 2 == 1) {
  //   meko = <h2 className="danger">{zahl}</h2>  }

{/* <h2 className={zahl % 2 ? "mek" : "danger"}>{zahl}</h2>  */}
   if (zahl % 2 == 0) {
    meko = "danger"
  } else if (zahl % 2 == 1) {
    meko = "primary" }
   

  return (
    <Alert variant={meko}>
      <Button onClick={clickPlus}>+</Button>
      <Button  onClick={clickMinus}>-</Button>
     <h2>{zahl}</h2>  

     </Alert>
  );
}

export default App;
