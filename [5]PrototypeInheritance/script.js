
// Challange
// Create a constructor function with at least 3 properties on it
// create at least two prototype methods for your prototype
// use the new binding to create a copy of the prototype


// Constructor
function Car(props){
  this.color = props.color;
  this.engine = props.engine;
  this.wheels = props.wheels;
}

// Prototype One
const coolCar = new Car({
  color: "golden",
  engine: 'hydoponic solar engine',
  wheels: 'floaties wheels v8'
})

// Prototype Two
const basicCar = new Car({
  color: "silver",
  engine: "basic engine",
  wheels: "basic wheels"
})

// Create a second prototype that inherits from the first
// Should have at least 2 properties and 1 prototype

