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
const naCitties = []

for(let i = 0; i <places.length; i++){

  if(places[i].region == 'North America') {
    naCitties.push(places[i])
  }
}

console.log(naCitties)