var alertNumber = 0;
function showAlert(message){
  return new Promise((resolve,reject)=>{
    document.write(`
      <div class="alert" id="alert-${alertNumber}">
        <b>Warnung:</b> ${message}
        <button type="button" id="reject-${alertNumber}">Brechen</button>
        <button type="button" id="resolve-${alertNumber}">Halten</button>
      </div>
    `);
    var alertBox   = document.getElementById(`alert-${alertNumber}`);
    var rejectBtn  = document.getElementById(`reject-${alertNumber}`);
    var resolveBtn = document.getElementById(`resolve-${alertNumber}`);
    resolveBtn.onclick = e => {
      alertBox.style.display = 'none'
      resolve()
    }
    rejectBtn.onclick = e => {
      alertBox.style.display = 'none'
      reject()
    }
    alertNumber++;
  })
}
console.log('showAlert()')
showAlert("Promise @1")
.then(  (e)=>{ console.log('resolved'); })
.catch( (e)=>{ console.log('rejected'); })
showAlert("Promise @2")
.then(  (e)=>{ console.log('resolved'); })
.catch( (e)=>{ console.log('rejected'); })
console.log('sofort mehr erreichen xD')