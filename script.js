    //var random = Math.ceil(Math.random() * 100) // ceil is to round up the number. floor is to round down
    var name = prompt('What is your name?')

    var play = confirm('Hello '+ name + ' Would you like to play?')
    var replay = 1

    do {

      if(play){
      var battle = confirm('Would you like to battle the Dragon?')
      if(battle){
        //battle
        var input = prompt('Enter a number between 1 and 99')
        var inputNum = input > 50 ? 'Congratulations!!! You slayed the Dragon.' : 'You lost!'
        alert(inputNum)
      }
      else{
        //quit battle
        alert('COWARD!!!... Come back when you are brave enough.')
      }
      }
     // dont want to play
      else{
        alert('Maybe next time.')
      }
      replay = prompt("Enter '1' to play again and '0' to quit")
    }
    
    while (replay == 1)



