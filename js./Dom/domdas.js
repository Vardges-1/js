// window.onload = function(){
//     var elem = document.getElementById("pushka");
//     console.log(elem);
//     console.log(elem.id);
//     // id avelacnel
//     // elem.id += "foo";
// }


// window.onload = function () {

//     //  var elem = document.querySelector(".block");
//     //  elem.style.backgroundColor = "red";

//     // stex guyn@ poxelu hamar petqa amen mekin hat hat kpnes
//     var blocks = document.querySelectorAll(".block");

//     // for (var i = 0; i < blocks.length; i++) {

//     //     blocks[i].style.backgroundColor = "black";
//     // }


//     /////////-----forEach stex aveli hesht guyn@ poxelu hamar petqa amen mekin hat hat kpnes

//     blocks.forEach(function (item) {
//         item.style.backgroundColor = "orange";
//         console.log(item);
//     })


// }





//////------------------------ Monipulacia classneri het
//////--------classList add Remove class togle 



// window.onload = function () {

//     var block = document.querySelector(".block");

//     ////////avelacnel class , miatel avelacnel
//     // block.classList.add("target");


//     //// pakasacnel , mijocov miatel pakasacnel
//     // block.classList.remove("target");


//     /////yete chka avelacnumaar
//     // block.classList.toggle("foo");

//     /////yete ka heracnuma
//     // block.classList.toggle("foo");

//     // setInterval(function () {
//     //     block.classList.toggle("target")
//     // }, 100);


//     console.log(block);


// }




/////////////-----------click, mouseover, mouseout, mousemove

window.onload = function () {
    var block = document.querySelector(".block");




    ////esela hnacela dzev@
    // counter = 0;

    // block.onclick = function (){
    //     if(counter == 3){
    //       this.onclick = null;
    //       return;
    //     }

    //     counter++;
    //     console.log(block);
    // }













    // imanumes qani anqamen click arel amenu skzbi vaxtei dzevna
    // block.onclick = function(){
    //     console.log("click");
    // }



    /////taza dzevna dra 

    // avelacnuma clik
    // block.addEventListener("click", onClick);


    // function onClick() {
    //     console.log("click");
    // }


    // // karas erku hat avelacnes
    // // block.addEventListener("click", function () {
    // //     console.log("click 2");
    // // })


    // // esel jnjuma click functian, uxaki petqa anun tas functiain verevini nman



    // setTimeout(function () {
    //     block.removeEventListener("click", onClick);
    // }, 3000);

    // console.dir(block)




    ////////----------event object


    // stanumes informatia vonca exel incha exel yerpa exel


    block.addEventListener("click", clickHandler);


    function clickHandler(event) {
        console.log("click", event);
    }


    


}



////////////////////----------------------------
/*
    JS DOM (для начинающий);
    ▪ методы getElement(s)...
    ▪ Простая манипуляция dom-коллекцией
    ▪ Events
    ▪ *bubbling and capturing
*/


// ----------------------------------------------------------
// mouse events + event object

// click, mouseover, mouseout, mousemove



// window.onload = function(){
//     var block = document.querySelector('.block'),
//         counter = 0;

//     // block.onclick = function(){
//     //     // if (counter == 3){
//     //     //     // return;
//     //     //     this.onclick = null;
//     //     //     return;
//     //     // }
//     //     counter++;
//     //     console.log('click');
//     // }

//     // block.onclick = function(){
//     //     console.log('handler 2');
//     // }

//     // block.addEventListener('click', clickHandler);

//     // function clickHandler(event){
//     //     console.log('click', event);

//     //     console.log(event.target === this);
//     // }

//     // setTimeout(function(){
//     //     block.removeEventListener('click', onClick);
//     // }, 3000);


//     // block.addEventListener('mousedown', handler);
//     // block.addEventListener('mouseup', handler);
//     // block.addEventListener('click', handler);
//     // block.addEventListener('mousemove', handler);


   

//     // ----------------------------------------------------------

//     // mousedown, mouseup, mouseenter, mouseleave

//     // block.addEventListener('mouseover', handler);
//     // block.addEventListener('mouseout', handler);

//     // block.addEventListener('mouseenter', handler);
//     // block.addEventListener('mouseleave', handler);



//     // ----------------------------------------------------------

//     // input events and keyboard events
//     // change, input + * keypress, keydown, keyup

//     // document.querySelector('#text').addEventListener('input', handler);
//     // document.querySelector('#text').addEventListener('change', handler);
//     // document.querySelector('#text').addEventListener('focus', handler);
//     // document.querySelector('#text').addEventListener('blur', handler);

//     var clickMe = document.querySelector('[data-some-attr="foo_attribute"]');

//     clickMe.addEventListener('click', function(event){
//         event.preventDefault();
//     });

//     document.addEventListener('contextmenu', function(event){
//         event.preventDefault();
//     });
// }









// function handler(event){
//     console.log(event.type, event);
// }