//// Prime Factorization



// function merna(num){
//     for(var i = 2; i <= num/i; i++){
//         console.log("i= " + i + "num " + num);
//         while(num %i === 0){
//            num = num/i
//            console.log("Factor " + i);
//         }
//     }
//     if(num > 1){ console.log("Last Factor " + num)}
// }



// merna(36);



/////////


////Slasher


// function merna(arr, howvay){
//     return arr.splice(0, howvay);
// }


// console.log(merna(["mer", "na", "heto",], 2))



//////////


////

// function merna(arr){
//     var first = arr[0].toLowerCase();
//     var second = arr[1].toLowerCase();

//     for(var i = 0; i < second.length; i++){
//         if(first.indexOf(second[i]) === -1) {return false};
//     }

//     return true;
// }


// console.log(merna(["Hayasa", "hayasi"]));



/////


////Check If the Brick Fits through the Hole


// function doesBrickFit(a,b,c, w,h) {
// 	return [a*b, a*c, b*c].some(el => el <= w*h) 
// }


// doesBrickFit(1, 1, 1, 1, 1) 



//////////


///Vowel to Vowel Links


// const vowelLinks = txt => txt.search(/[aeiou] [aeiou]/i) !== -1;

// vowelLinks("a very large appliance") 


/////////



/////Falsy Bouncer


// function merna(arr){

//     var truti = [];

//     for(var elem of arr){
//         if(elem) truti.push(elem)
//     }

//     return truti;
// }


// function merna(arr){

//   return arr.filter( item => {
//      return item
//    })
// }


// console.log(merna([7, "ate", "", false, 9]))