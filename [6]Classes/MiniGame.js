class ZombieGame {
  constructor(props){
    this.userName = props.userName;
  }

  gameStart() {
    return `Welcome ${this.userName} to a geto game`
  }


}

const newGame = new ZombieGame({userName: 'lyub12'})

console.log(newGame.gameStart())


class ZombieClass {
  constructor(props){
    this.health = 100
    this.name = props.name
    this.power = props.power
  }

  stats(){
    return `Zombie ${this.name} has a power level of ${this.power} and health of ${this.health}`
  }

  attack(recipient){
    recipient.health = recipient.health - this.power / 100;
    return `${this.power/100} damage has been given to ${recipient.name} from ${this.name}`
  }

}


const stanley = new ZombieClass({name: 'stanley', power: 100})
const bot = new ZombieClass({name: "jeff", power: 150})

console.log(bot.stats())

console.log(stanley.attack(bot))
console.log(stanley.attack(bot))
console.log(stanley.attack(bot))

console.log(bot.health)

console.log(bot.stats())
