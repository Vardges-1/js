function showAlert(message){
    return new Promise((resolve,reject)=>{
      document.write(`
        <div id="alert">
          <b>Warnung:</b> ${message}
          <button type="button" id="reject">Brechen</button>
          <button type="button" id="resolve">Halten</button>
        </div>
      `);
      var alertBox   = document.getElementById('alert');
      var resolveBtn = document.getElementById('resolve');
      var rejectBtn  = document.getElementById('reject');
      alertBox.display = 'block';
      resolveBtn.onclick = resolve
      rejectBtn .onclick = reject
    })
  }
  console.log('showAlert()')
  showAlert("Promises koennen auch gebrochen werden...")
  .then(  (e)=>{ console.log('resolved'); })
  .catch( (e)=>{ console.log('rejected'); })
  console.log('sofort mehr erreichen xD')