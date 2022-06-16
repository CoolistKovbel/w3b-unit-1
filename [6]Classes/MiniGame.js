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