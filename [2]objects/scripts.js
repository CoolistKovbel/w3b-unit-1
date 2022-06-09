// Anatomy of an object
// const obj = {
//   name: 'lyub',
//   age: 23,
//   job: 'instructor',
//   location: {
//     street: '123 avc st',
//     city: 'samjo',
//     state: 'ct'
//   },
//   hobbies: ['coding', 'gaming', 'making money'],
//   works: function() {
//     return `${this.name} goes to work as a ${this.job}`
//   }
// }
// console.log(obj.hobbies[1])
// console.log(obj.works())

const places = [
  {city: 'Tel Aviv', country: 'Israel', region: "Middle East" },
  {city: 'Toronto', country: 'Canada', region: 'North America'},
  {city: 'Najaf', country: 'Iraq', region: 'Middle East'},
  {city: 'Amman', country: 'Jordan', region: 'Middle East'},
  {city: 'Seattle', country: 'USA', region: 'North America'},
  {city: 'Quito', country: 'Equador', region: 'South America'},
  {city: 'Dar Es  Salaam', country: 'Tanzania', region: 'East Africa'}
]

// looping
// const naCitties = []

// Challange
// Add a neighborhood key to each object as you loop


// for(let i = 0; i <places.length; i++){
//   // Random Key
//   const deKey = Math.floor(Math.random() * places.length)

//   places[i].neighborhoodKey = deKey

//   if(places[i].region === 'North America') naCitties.push(places[i])
// }

// console.log(places)
// console.log(naCitties)




// Most Realistic Way
function placeMaker(array, index, neighborhood) {

  array[index].neighborhood = neighborhood

  return array

}

console.log(placeMaker(places, 0, '123'))


