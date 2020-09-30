// window.onload = function () {
//     // var elem = document.getElementById("pushka");
//     // console.log(elem);
//     var block = document.querySelector(".block ")
//     console.log(block);

// }

// classlist

// window.onload = function () {
//     var block = document.querySelector(".block");
//     // block.className += " target";

//     // block.classList.add("erek", "bari"); ///avelacnuma
//     // block.classList.remove("foo", "bari");////pakasacnuma
//     // block.classList.toggle("tet");////ham avelacnuma yete et anunov chka kamel pakasacnuma


//     // ///amen 100 milivarkyan" mek avelavnuma
//     // setInterval(function(){
//     //     block.classList.toggle("target");
//     // }, 100
//     // );
//     console.log(block);


// }


window.onload = function () {
    var block = document.querySelector(".block");
    counter = 0;

    // block.onclick = function() {

    //     if (counter === 3) {
    //         this.onclick = null;
    //         return;
    //     }
    //     counter++;
    //     console.log("click");
    // }

    ///----------------
    // objekt sobitiya
    // stanumenq informatia incha exel vortexa haytnvel u xi 



    block.addEventListener("click", clickHandler);
    // block.addEventListener("mousedown", clickHandler);

    function clickHandler(event) {
        console.log("click", event);
        // console.log(event.target === this);
    }



    ///---------------
    // functia cliki hamar
    // block.addEventListener("click", onClick);

    // function onClick(){
    //     console.log("click");
    // }






    ////erkrortna avelacnum click
    // block.addEventListener("click", function(){
    //     console.log("click 2");
    // });



    // anjatuma click 3 varkyan heto

    // setTimeout(function(){
    //     block.removeEventListener("click", onClick);
    // }, 3000);

    // ////jnjuma click
    // block.removeEventListener("click", onClick);


}