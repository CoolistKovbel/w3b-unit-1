
// Calculator Function
// We want functions to do one things
function calculator(num1,num2,operator){
// Too much going on is bad
  function add(num1, num2){
    return num1 + num2
  }
  function subtract(num1, num2){
    return num1 - num2
  }
  function multiply(num1, num2){
    return num1 * num2
  }
  function divide(num1, num2){
    return num1 / num2
  }

  if(operator === '+'){
    return add(num1,num2)
  }else if(operator === '-'){
    return subtract(num1,num2)
  }else if(operator === '*'){
    return multiply(num1,num2)
  }else if(operator === '/'){
    return divide(num1,num2)
  }else return `Please give an operator`

}

// Highier order function / call back style

function calculatorHOF(num1, num2, cb){
  return cb(num1, num2)
}

function addCB(num1, num2){
  return num1 + num2
}
function subtractCB(num1, num2){
  return num1 - num2
}
function multiplyCB(num1, num2){
  return num1 * num2
}
function divideCB(num1, num2){
  return num1 / num2
}

// console.log(calculatorHOF(15,20, multiplyCB))


// Challange HOF for a store
// Create at least 3 CBS for aisles of the store
// When HOF is invoke return `the <asile name> has item 1, and item 2 on sale

function storeHOF(item1,item2, cb){
  return cb(item1,item2)
}

function candyIsile(item1, item2){
  return `CandyIsle has ${item1} and ${item2} is on sale`
}

function cookieIsile(){

}

function fruitIsile(){

}

// console.log(storeHOF('snikers', 'skittles', candyIsile))


// Teachers result
function store(array, cb){
  return cb(array)
}

function bakery(array){
  return `Bakery has ${array[0]}, ${array[1]}, ${array[2]} on sale`
}

// console.log(store(['bread', 'pizza', 'cake'] , bakery))


// Built in functions in JS

// forEach

const arr = [1,2,3,4,5]

// refernece to a function
// function cb(num) {
//   // do code here
//   num = num * 2
// }
// arr.forEach(cb)

// inline function
// arr.forEach(function(num) {
//   num = num * 2
// })


// arrow function

// arr.forEach((num, i) => {
//   arr[i] = num * 2
// })

// map

const cityData = [
  {city: 'seattle', state: "WA", population: 652405, land_area: 83.9},
  {city: "new york", state: "NY", population: 8405837, land_area: 302.6},
  {city: "boston", state: "MA", population: 645966, land_area: 48.3},
  {city: "kansas city", state: "MO", population: 467007, land_area: 315}
]

const mappedCity = cityData.map((element, index, array) => {

  const fLetter = element.city[0].toUpperCase()
  let slice = element.city.slice(1)
  return fLetter + slice

})

// console.log(mappedCity)

// Filter

const filteredArray = cityData.filter((element) => {
  return element.population > 500000
})

// console.log(filteredArray)


// Reduce

const totalLandArea = cityData.reduce((accumulator, currentElement) => {

  return accumulator += currentElement.land_area

},0)

// console.log(totalLandArea)


// Breakout
// 1. map to create two separte arrays of city name and population
// 2. filter to get rid of cities with less than 500k population
// 3. reduce to add up total population
// recombine the two arrays into one array of objects again

const cityDataV2 = [
  {city: 'seattle', state: "WA", population: 652405, land_area: 83.9},
  {city: "new york", state: "NY", population: 8405837, land_area: 302.6},
  {city: "boston", state: "MA", population: 645966, land_area: 48.3},
  {city: "kansas city", state: "MO", population: 467007, land_area: 315}
]


function breakOut(array){

  let arrayOne = []

  let arrayTwo = []

  array.map(value => {

    if(arrayOne.length !== 2){
      arrayOne.push({
        city: value.city,
        population: value.population
      })
    } else{
      arrayTwo.push({
        city: value.city,
        population: value.population
      })
    }

  })


  arrayOne = arrayOne.filter(value => value.population > 500000)
  arrayTwo = arrayTwo.filter(value => value.population > 500000)


  arrayOne = arrayOne.reduce((accumulator, currentVal) => {
    return accumulator += currentVal.population
  },0)

  arrayTwo = arrayTwo.reduce((accumulator, currentVal) => {
    return accumulator += currentVal.population
  },0)

  console.log(arrayOne)
  console.log(arrayTwo)

}

console.log(breakOut(cityDataV2))