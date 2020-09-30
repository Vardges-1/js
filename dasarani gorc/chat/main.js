// var myForm = document.querySelector("#myForm")
// var formContain = document.querySelector(".form-container")
// var pismo = document.querySelector(".pismo")
// var cancel = document.querySelector(".cancel")
// var massege = document.querySelector(".massege-contaier")
// var btn = document.querySelector(".Send")
// var open = document.querySelector(".open-button")
// var udalit = document.querySelector(".jnjel")
// var meko = document.querySelector(".meko")

// var container = document.querySelector(".massege-contaier")
// formContain.addEventListener("submit", myFunction)
// cancel.addEventListener("click", closeForm)

// open.addEventListener("click", openForm)



// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }








// function myFunction(event) {

//   event.preventDefault();
//   fetchMessages(pismo.value)


// }


// const fetchMessages = async (data) => {
//   let response = await fetch(
//     'http://localhost:9922' + '/message', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         msg: data,
//         name: 'anx'
//       })
//     });
//   let daten = await response.json();
//   container.innerHTML = ''
//   for (var i = 0; i < daten.msgs.length; i++) {
//     var d = daten.msgs[i]
//     var namak = `



//   <div class="meko darker">
//   <p>${d}</p>
//   <button class="jnjel">X</button>
//   </div>

// `


//     container.insertAdjacentHTML("afterbegin", namak);

//   }




// }

// function esho() {
//   setInterval(fetchMessages, 5000)
// }

// esho()

var myForm = document.querySelector("#myForm")
var formContain = document.querySelector(".form-container")
var pismo = document.querySelector(".pismo")
var cancel = document.querySelector(".cancel")
var massege = document.querySelector(".massege-contaier")
var btn = document.querySelector(".Send")
var open = document.querySelector(".open-button")
var udalit = document.querySelector(".jnjel")
var meko = document.querySelector(".meko")

var container = document.querySelector(".massege-contaier")
formContain.addEventListener("submit", myFunction)
cancel.addEventListener("click", closeForm)

open.addEventListener("click", openForm)



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}











const fetchMessages = async (data) => {
  let response = await fetch(
    'http://localhost:9922' + '/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        msg: data,
        name: 'anx'
      })
    });
  let daten = await response.json();
  container.innerHTML = ''
  for (var i = 0; i < daten.msgs.length; i++) {
    var d = daten.msgs[i]
    
    var namak = `



  <div class="meko darker">
  <img src="./image/nkar.png" class="nkar" alt="Avatar">
  <p>${d}</p>
  <button class="jnjel">X</button>
  </div>

`


    container.insertAdjacentHTML("afterbegin", namak);

  }




}

function myFunction (event) {


  event.preventDefault();
  fetchMessages(pismo.value)



}


function esho() {
  setInterval(fetchMessages, 5000)
}

esho()