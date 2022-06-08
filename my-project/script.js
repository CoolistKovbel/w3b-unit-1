let a = 7;
let b = a;
b = 10


function changeValue(num) {
  console.log(num)
  num = 10
  console.log(num)
}

// let c = 10;
// changeValue(c)
// console.log(c)


let arrOne = [1,2,3,4,5]
console.log(arrOne[3])
arrOne[1] = 10
arrOne[2] = 20
arrOne[5] = 20
console.log(arrOne)

// for(let placeholder of arrOne){
//   console.log(placeholder)
// }


// Make an array
let arrayTwo = [1,2,3,4,5,6,7,8,9]
// loop through array

// for loop

// for(let i =0; i <= arrayTwo.length; i++){

//   // if(arrayTwo[i] % 2 == 0) console.log()

//   if(arrayTwo[i] % 2){
//     // Log number if its equal to the number
//     console.log(`The number ${i} is even.`)
//   } else{
//     console.log(`The number ${i} is odd`)
//   }

// }

// foreach
function getCat(name){

}

let catArray = ['ginger', 'junior', 'chicken']

catArray.forEach((value, index, array) => {
  console.log('xxx')
  console.log(value)

})
