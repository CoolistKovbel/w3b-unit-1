
// Challange
// Create a constructor function with at least 3 properties on it
// create at least two prototype methods for your prototype
// use the new binding to create a copy of the prototype


// Constructor
function ZombieObj(props){
  this.power = props.power;
  this.agility = props.agility
  this.defense = props.defense
}

// Prototype method One
ZombieObj.prototype.attack = function() {
  return `Zombie destroys with ${this.power}`
}


// // Prototype method Two
ZombieObj.prototype.intro = function(){
  return `This zombie has the power over ${this.power}, is fast as ${this.agility}, tougher as ${this.defense}`
}

console.log(ZombieObj.prototype)

// invoke
const jj = new ZombieObj({
  power: 9000,
  agility: 10,
  defense: 1000,
})

console.log(jj)
console.log(jj.attack())
console.log(jj.intro())

// Create a second prototype that inherits from the first
// Should have at least 2 properties and 1 prototype


function JuniorZombie(props) {
  ZombieObj.call(this, props)
  this.name = props.name
}

JuniorZombie.prototype = Object.create(ZombieObj)

console.log(new JuniorZombie({
  power: 900,
  agility: 1,
  defense: 10,
  name: 'karol'
}))

