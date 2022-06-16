// 5 levels of scope

function objMaker(toppingOne,toppingTwo,toppingThree,toppingFour,toppingFive ){

  const arr = {}


  if(toppingOne !== '' || toppingOne !== null){
    arr.toppingOne = toppingOne

    if(toppingTwo !== '' || toppingTwo !== null){
      arr.toppingTwo = toppingTwo

      if(toppingThree !== ''){

        arr.toppingThree = toppingThree

        if(toppingFour !== ''){

          arr.toppingFour = toppingFour


          if(toppingFive !== ''){
            arr.toppingFive = toppingFive
          }

        }

      }

    }

  }


  return arr

}

console.log(objMaker('pepperonie','anchovie','pinapple','ham','mushroom','beans'))


// Closure Function

function buildABear(){

  const bear = {}

  function head(){

  }

  function body(){

  }

  function color(){

  }

  function gender(){

  }

  function hat(){

  }

  return bear

}

// Counter Closure

function counterClosure(){
  let count = 0
  return function(){
    return count++
  }
}

// Returns function - you can put it into a variable
const counterFunc1 = counterClosure()
console.log(counterFunc1)

