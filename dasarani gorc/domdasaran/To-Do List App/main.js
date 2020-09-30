var inpu = document.querySelector("#inpu");
var buto = document.querySelector("#buto");
var ulList = document.querySelector("#ule");

function lister() {
  var lies = document.createElement("li");
  let del = document.createElement("button");
  lies.classList.add("lies");
  lies.innerText = inpu.value;

  del.classList.add("btn");
  del.innerText = "x";

  lies.append(del);
  ulList.append(lies);

  del.addEventListener("click", removeItem);

  
}

let removeItem = event => {
  event.target.parentElement.remove();
};

buto.addEventListener("click", lister);

// del.addEventListener("click", function(){
  //     document.querySelector('.lies').remove();
  // })

  // del.addEventListener("click", (e) =>{
  //     lies = lies.filter(i => {
  //         return i !== item
  //     })

  // })


// ulList.forEach(item => {

//     del.click = (e) => {
//         ulList = ulList.filter(i => {
//             return i !== item
//         })

//         renderName()

//     }

// }),
