// --- Arrayi amena mec tiv@ havasara mnacac tveri antanur gumarin te che



// function ArraySum(arr){
// let tempArr = arr.sort((a, b) => {
//     return a-b

// })

// let largest = tempArr.pop()
// console.log(largest)

// let numb = 0
// tempArr.forEach(e => (numb += e))

// return largest == numb

// } 

    
//     console.log(ArraySum([1, 6, 4, 2, 13]));
    
//     console.log(ArraySum([1, 2, 4, 34, 22]));




//////-------------------------------------


// --_Sarqel mecatar sax bareri arachin tarer@


// function caputalizeWords(arr){

//     let words = arr.split(" ").map(word => {
//         let firstLetter = word.slice(0, 1);
//         let rest = word.slice(1);
//         firstLetter = firstLetter.toUpperCase();
//          return `${firstLetter}${rest}`;
//     });


//     let words = arr.split(" ").map(word => {
//          return  word.charAt(0).toUpperCase() + word.slice(1);
//     });


//     return words.join(" ")
// }

// console.log(caputalizeWords("I got up early today"));
// console.log(caputalizeWords("I walked straight to the beach"));





//////-----------------------------------------------



//---------Unique Values




// function unique(str){


// let values = {};

// for (let letter of str){
//     if(values[letter]){
//         return false;
//     }
//     console.log(values[letter] = "exists")
// }
// return true;




// let values = [];
// for(let letter of str){
//     if(values.indexOf(letter) !== -1) {
//         return false;
//     }
//     values.push(letter);
//  }

// // return true;
// }


// console.log(unique("abcde"))
// console.log(unique("abacdefb"))







