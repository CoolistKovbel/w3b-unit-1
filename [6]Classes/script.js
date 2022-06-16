// BreakOut Room:
// Make a contructor function give it some prototype methods
// 3 props on the contructor at least 2 methods

// function basicZombie(props) {
//   this.speed = props.speed;
//   this.strength = props.strength;
//   this.agility = props.agility
// }

// basicZombie.prototype.attack = function () {
//   return `This zombie did an attack of ${this.strength}`
// }

// basicZombie.prototype.stats = function() {
//   return `This zombie has an strength of ${this.strength}, speed of ${this.speed}, agility of ${this.agility}`
// }

// let pete = new basicZombie({
//   speed: 100,
//   strength: 100,
//   agility: 100
// })

// BreakOut
// inherit from first prototype to create a second prototype
// at least 1 unique property and method

// function AlphaZombie(props) {
//   basicZombie.call(this, props)
//   this.featureAttack = props.featureAttack
//   this.name = props.name
// }


// AlphaZombie.prototype = Object.create(basicZombie.prototype)

// let jered = new AlphaZombie({
//   speed: 200,
//   strength: 1000,
//   agility: 200,
//   featureAttack: 'Skull crusher',
//   name: 'jered'
// })

// console.log(jered.stats())

// AlphaZombie.prototype.usedAttack = function (){
//   return `${this.name} used ${this.featureAttack}`
// }


// console.log(jered.usedAttack())

// out to create a class

class ZombieClass{
  constructor(props){
  this.speed = props.speed;
  this.strength = props.strength;
  this.agility = props.agility
  }

  attack(){
    return `This zombies attacked with ${this.strength} power`
  }

  status(){
    return `This zombie has an strength of ${this.strength}, speed of ${this.speed}, agility of ${this.agility}`
  }

}

let james = new ZombieClass({
  speed: 100,
  strength: 9000,
  agility: 100
})

console.log(james)
console.log(james.attack())
console.log(james.status())



// Class Work
// function Grandpa(props) {
//   this.firstName = props.firstName
//   this.lastName = props.lastName
//   this.age = props.age
// }

// Grandpa.prototype.introduce = function() {
//   return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
// }

// Grandpa.prototype.gift = function() {
//   return `Grandpa gives you a gift`
// }

// const grandpa1 = new Grandpa({firstName: "Boby", lastName: "Jones", age: 75})
// console.log(grandpa1)




// function Father(props) {
//   // get properies from grandma
//   Grandpa.call(this,props)
//   this.job = props.job
// }

// // THis makes a copy of grandpa prototype
// Father.prototype = Object.create(Grandpa.prototype)

// Father.prototype.work = function(){
//   return `${this.firstName} works as a ${this.job}`
// }

// const dad1 = new Father({
//   firstName: 'john',
//   lastName: "jones",
//   age: 42,
//   job: 'Software enginer'
// })

// console.log(dad1.gift())
// console.log(dad1.work())


class GrandpaClass {
  constructor(props){
    this.firstName = props.firstName
    this.lastName = props.lastName
    this.age = props.age
  }

  // methods go here
  introduce(){
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
  }
  gift() {
    return `${this.firstName} gives you a gift`
  }


}

const grandpa2 = new GrandpaClass({
  firstName: 'Joe',
  lastName: 'Boby',
  age: 100
})

console.log(grandpa2)
